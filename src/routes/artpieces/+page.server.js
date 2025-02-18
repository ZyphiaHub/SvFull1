import { db } from '$lib/server/db'; // Az adatbázis kapcsolat
import { artPiecesTbl } from '$lib/server/db/schema'; // A táblád

//oldal betöltődésekor ez történik, elérhetővé tesszük a frontend számára az adatokat
export async function load() {
    const artPieces = await db.select().from(artPiecesTbl);
    return { artPieces };
}

//INSERT funkcióhoz ez kell
export const actions = {
    insertArtPiece: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const artist = formData.get('artist');
        const year = formData.get('year');
        const status = formData.get('status');

        if (!title || !artist || !year || !status) {
            return { success: false, message: "Minden mezőt ki kell tölteni!" };
        }

        await db.insert(artPiecesTbl).values({ title, artist, year: Number(year), status });

        return { success: true };
    }
};