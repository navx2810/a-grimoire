import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as CookieParser from "cookie-parser"

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.use(CookieParser())
	app.setGlobalPrefix('api')
	await app.listen(3000);
}
bootstrap();
