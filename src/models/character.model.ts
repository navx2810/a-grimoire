import db from "../db";
import * as Sequlize from "sequelize"

export const Character = db.define("character", {
	user: {
		allowNull: false,
		type: Sequlize.STRING
	},
	userName: Sequlize.STRING,
	meta: {
		allowNull: false,
		type: Sequlize.JSON
	}
})