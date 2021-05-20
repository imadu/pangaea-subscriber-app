import Joi from "joi";

export const isValidSubscription = Joi.object({
    url: Joi.string().uri().required
})