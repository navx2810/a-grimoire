import db from "../db";
import * as Sequlize from "sequelize"

export const Feature = db.define("feature", {
	name: Sequlize.STRING,
	description: Sequlize.TEXT,
	url: Sequlize.STRING
})