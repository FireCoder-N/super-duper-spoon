import { getDb } from "./db.mjs"

export const findStaff = async (userq) => {
    try {
        let db = getDb();

        let user = await db.collection('users').findOne({ userID: userq });
        if (user) {
            return true;
        } else {
            return false;
        }

    } catch(err) {
        console.log(err);
    }

}