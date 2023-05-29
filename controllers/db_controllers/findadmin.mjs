import { getDb } from "./db.mjs"

export const findAdmin = async (userq, passq) => {
    try {
        let db = getDb();

        let user = await db.collection('users').findOne({ userID: userq });
        if (user && user.accessKey === passq) {
            return true;
        } else {
            return false;
        }

    } catch(err) {
        console.log(err);
    }
}