import db from "../db";
import * as Sequlize from "sequelize"
import { Character } from "./character.model";
import { Item } from "./item.model";

export const Inventory = db.define("inventory", {
	count: { type: Sequlize.INTEGER, defaultValue: 1 }
})

Item.belongsToMany(Character, { through: Inventory })
Character.belongsToMany(Item, { through: Inventory })