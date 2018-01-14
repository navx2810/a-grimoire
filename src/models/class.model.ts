import db from "../db";
import * as Sequlize from "sequelize"
import { Character } from "./character.model";

export const Class = db.define("class", {
	name: Sequlize.STRING,
	proficientSavingThrows: Sequlize.STRING
})