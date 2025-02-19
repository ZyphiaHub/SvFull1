import { db } from '$lib/server/db'; // Az adatbázis kapcsolat
import { eventsTbl } from '$lib/server/db/schema'; // A táblád

//oldal betöltődésekor ez történik, elérhetővé tesszük a frontend számára az adatokat
export async function load() {
    const events = await db.select().from(eventsTbl);
    return { events };
}

//INSERT funkcióhoz ez kell
export const actions = {
    insertEvent: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const date = formData.get('date');
        const location = formData.get('location');

        if (!name || !date || !location) {
            return { success: false, message: "Minden mezőt ki kell tölteni!" };
        }

        await db.insert(eventsTbl).values({ name, date, location });

        return { success: true };
    }
};