import { db } from '$lib/server/db'; // Az adatbázis kapcsolat
import { artPiecesTbl } from '$lib/server/db/schema'; // A táblád

//oldal betöltődésekor ez történik, elérhetővé tesszük a frontend számára az adatokat
export async function load() {
    const artPieces = await db.select().from(artPiecesTbl);
    return { artPieces };
}