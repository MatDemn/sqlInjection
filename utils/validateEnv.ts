import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    DB_HOST: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string().min(1),
    DB_PORT: z.coerce.number().default(3306),
});

export const envVarSchema = envSchema.parse(process.env);