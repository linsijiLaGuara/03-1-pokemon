
import *as join  from 'Joi';

export const JoiValidationSchema= join.object({
    MONGODB: join.required(),
    PORT: join.number().default(3005),
    DEFAULT_LIMIT: join.number().default(6),
})