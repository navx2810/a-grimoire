import * as Sequlize from "sequelize"
export default new Sequlize("grm",null, null, {
	dialect: 'sqlite',
	storage: `${__dirname}/db.sqlite`
})