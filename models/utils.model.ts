import { knex } from "../db";

// get all rows in a table
export async function knexSelectAll(tableName: string) {
	const data = await knex(tableName).select("*");

	return data;
}

// insert the data in to a table
export async function knexInsert(tableName: string, data: any) {
	await knex(tableName).insert(data);
}

// update a row in a table using an id
export async function knexUpdate(tableName: string, id: number, newData: any) {
	await knex(tableName).where("id", "=", id).update(newData);
}

// delete a row in a table using an id
export async function knexDelete(tableName: string, id: number) {
	await knex(tableName).where("id", "=", id).delete();
}

// check if an id exists in a table
export async function knexExists(tableName: string, id: number) {
	const foundItems = await knex(tableName).select("*").where("id", "=", id);

	if (foundItems.length === 0) return false;

	return true;
}
