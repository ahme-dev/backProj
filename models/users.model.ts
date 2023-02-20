import Joi from "joi";

export const userSchema = Joi.object({
	id: Joi.number().integer(),
	name: Joi.string().required(),
});
