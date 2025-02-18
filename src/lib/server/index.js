import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { env } from '$env/dynamic/private'
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set')
const client = new Database(env.DATABASE_URL)
export const db = drizzle(client)
import * as table from '$lib/server/db/schema'

// Új mű hozzáadása
export const createArtPiece = async (title, artist, year, status)  =>{
  
  return {id: await db.insert(table.artPiecesTbl).values({ title, artist, year, status }).returning()}
};
//get artpieces
export const getallPieces = async () => {
    const results = await db.select().from(table.artPiecesTbl)
    return results
}
//get artpieces by ID
export const getArtPiece = async (id) => {
    const results = await db.select().from(table.artPiecesTbl).where(eq(table.artPiecesTbl.id, id))
    return results
}
//delete artpiece
export const deleteArtPiece = async (id) => {
    await db.delete(table.artPiecesTbl).where(eq(table.artPiecesTbl.id, id))
}

//---------------
// Új esemény hozzáadása
export const createEvent = async ( name, date, location ) => {
    {id: await db.insert(table.eventsTbl).values({ name, date, location }).returning()}
};

//get events
export const getallEvents = async () => {
    const results = await db.select().from(table.eventsTbl)
    return results
}
//get event by ID
export const getEvent = async (id) => {
    const results = await db.select().from(table.eventsTbl).where(eq(table.eventsTbl.id, id))
    return results
}
//delete event
export const deleteEvent = async (id) => {
    await db.delete(table.eventsTbl).where(eq(table.eventsTbl.id, id))
}