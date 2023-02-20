import Joi from "joi";

export const orderSchema = Joi.object({
	id: Joi.number().integer(),
	date: Joi.date().required(),
	qty: Joi.number().integer().required(),
	price: Joi.number().integer().required(),
	item_id: Joi.number().integer().required(),
	user_id: Joi.number().integer().required(),
});
