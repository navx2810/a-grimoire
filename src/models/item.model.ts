import db from "../db";
import * as Sequlize from "sequelize"
import { Inventory } from "./inventory.model";

export const Item = db.define("item", {
	name: Sequlize.STRING,
	weight: Sequlize.DECIMAL,
	url: Sequlize.STRING,
	description: Sequlize.TEXT,
})