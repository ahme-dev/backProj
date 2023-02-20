import Joi from "joi";

export const itemSchema = Joi.object({
	id: Joi.number().integer(),
	name: Joi.string().required(),
	barcode: Joi.string().allow(null),
	image_url: Joi.string().allow(null),
	available_qty: Joi.number().integer().min(0),
	book_id: Joi.number().integer().required(),
	brand_id: Joi.number().integer().required(),
});
