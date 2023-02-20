import Joi from "joi";

export const brandSchema = Joi.object({
	id: Joi.number().integer(),
	name: Joi.string().required(),
});
