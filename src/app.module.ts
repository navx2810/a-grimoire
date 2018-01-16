import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { CharacterComponent } from "./components/character.component";
import { CharacterController } from "./controllers/character.controller";

@Module({
	imports: [],
	controllers: [AppController, CharacterController],
	components: [CharacterComponent]
})
export class ApplicationModule {}
