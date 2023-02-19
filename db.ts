import { knex as knexClient } from "knex";

export const knex = knexClient({
	client: "mysql",
	connection: {
		host: "127.0.0.1",
		port: 3306,
		user: "backproj",
		password: "backproj",
		database: "backproj",
	},
});
