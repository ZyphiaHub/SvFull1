//jött a demoval
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    age: integer('age'),
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

//Zsófi tette hozzá
export const artPiecesTbl = sqliteTable('artPiecesTbl', {
    id: integer('id').primaryKey(), // Elsődleges kulcs
    title: text('title').notNull(), // Mű címe
    artist: text('artist').notNull(), // Művész neve
    year: integer('year').notNull(), // Készítés éve
    status: text('status').notNull(),
  });

  export const eventsTbl = sqliteTable('eventsTbl', {
    id: integer('id').primaryKey(), // Elsődleges kulcs
    name: text('name').notNull(), // Esemény neve
    date: text('date').notNull(), // Esemény dátuma (szövegként tárolva)
    location: text('location').notNull(), // Esemény helyszíne
  });  
