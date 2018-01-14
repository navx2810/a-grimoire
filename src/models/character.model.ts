import db from "../db";
import * as Sequlize from "sequelize"
import { Race } from "./race.model";
import { Class } from "./class.model";
import { Item } from "./item.model";
import { Inventory } from "./inventory.model";

export const Character = db.define("character", {
	user: Sequlize.STRING,
	userName: Sequlize.STRING,
	name: Sequlize.STRING,
	class: Sequlize.STRING,
	exp: Sequlize.INTEGER,
	hp: Sequlize.INTEGER,
	hpMax: Sequlize.INTEGER,
	hpTemp: Sequlize.INTEGER,
	deathSaveFails: Sequlize.INTEGER,
	deathSaveSuccesses: Sequlize.INTEGER,
	str: Sequlize.INTEGER,
	strBonus: Sequlize.INTEGER,
	dex: Sequlize.INTEGER,
	dexBonus: Sequlize.INTEGER,
	con: Sequlize.INTEGER,
	conBonus: Sequlize.INTEGER,
	int: Sequlize.INTEGER,
	intBonus: Sequlize.INTEGER,
	wis: Sequlize.INTEGER,
	wisBonus: Sequlize.INTEGER,
	cha: Sequlize.INTEGER,
	chaBonus: Sequlize.INTEGER,
	inspiration: Sequlize.BOOLEAN,
	alignment: Sequlize.STRING,
})

Character.hasOne(Race)