import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

//SQLite adatbázis létrhozása, --> client.db
const client = new Database(env.DATABASE_URL);

//Drizzle inicializálás
export const db = drizzle(client);
