import db from "../db";
import * as Sequlize from "sequelize"
import { Character } from "./character.model";
import { Class } from "./class.model";

export const Job = db.define("job", {
	level: Sequlize.INTEGER
})

Character.belongsToMany(Class, { through: Job })
Class.belongsToMany(Character, { through: Job })