import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { CharacterComponent } from "./components/character.component";

@Module({
	imports: [],
	controllers: [AppController],
	components: [CharacterComponent]
})
export class ApplicationModule {}
