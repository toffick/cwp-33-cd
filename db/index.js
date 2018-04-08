const config = require('config');
const {commit, repo} = require('./models');

module.exports = (Sequelize) => {

	console.log(process.env.NODE_ENV);
	const dbConfig = config.db[process.env.NODE_ENV || 'development'];
	const sequelize = new Sequelize(dbConfig.name,
			dbConfig.user, dbConfig.pass, dbConfig.options);

	const Commit = commit(Sequelize, sequelize);
	const Repo = repo(Sequelize, sequelize);

	Repo.hasMany(Commit);

	return {
		Commit,
		Repo,
		sequelize,
		Sequelize
	};
};
