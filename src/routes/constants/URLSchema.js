import Joi from 'joi';

export const URL_SCHEMA = Joi.object().keys({
  userId: Joi.string().max(36).regex(/^[A-Za-z0-9-]+$/),
  teamId: Joi.string().max(36).regex(/^[A-Za-z0-9-]+$/),
});
