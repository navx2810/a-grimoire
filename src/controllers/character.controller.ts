import { Get, Controller, Post, Body, HttpException, HttpStatus, Param, Query } from "@nestjs/common";
import { CharacterComponent } from "../components/character.component";

@Controller("character")
export class CharacterController {

	constructor(private readonly char: CharacterComponent) {}

	@Get("mine")
	async getUsersCharacters(@Query('user') user ) {
		let err = []
		if(!user) { err.push('User name needs to be provided.') }
		if(err.length) { return new HttpException(err, HttpStatus.BAD_REQUEST) }
		const characters = await this.char.findCharacters(user)
		if(characters.length) {
			return characters
		} else {
			return new HttpException("No characters found.", HttpStatus.NO_CONTENT)
		}
	}

	@Post()
	async create(@Body() dao: {id?: number, user: string, meta: string }): Promise<any> {
		let errs = []

		if(!dao.user) { errs.push("User can not be blank.") }
		if(!dao.meta || dao.meta === "{}") { errs.push("Meta can not be blank.") }
	
		if(errs.length) {
			throw new HttpException(errs, HttpStatus.BAD_REQUEST)
		}

		let character
		try {
			character = await this.char.saveCharacter(dao);
		} catch(e) {
			throw new HttpException({errors: e.errors.map(it=> it.message)}, HttpStatus.BAD_REQUEST)
		}
		if(character) return character
		else throw new HttpException("Could not create character.", HttpStatus.BAD_REQUEST)
	}
}
