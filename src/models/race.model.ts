import db from "../db";
import * as Sequlize from "sequelize"
import { Class } from "./class.model";
import { Character } from "./character.model";

export const Race = db.define("race", {
	name: Sequlize.STRING,
	speed: Sequlize.STRING,
	vision: Sequlize.STRING,
})