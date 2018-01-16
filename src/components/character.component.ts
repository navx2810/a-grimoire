import { Component } from "@nestjs/common";
import { Character } from "../models/character.model";
import { Op } from "sequelize";

@Component()
export class CharacterComponent {
	async saveCharacter({ user, meta }) {
		let c = await Character.create({ user, meta })
		if(c) { return c }
	}

	async findCharacter(id: number) {
		let c = await Character.find({
			where: { id }
		})
		return c
	}

	async findCharacters(user: string) {
		let c = await Character.findAll({
			where: {
				user
			}
		})
		return c
	}
}