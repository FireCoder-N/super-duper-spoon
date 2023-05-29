import { getDb } from "./db.mjs";
import { ObjectId } from 'mongodb';

export const deletesubmission = async (req, res) =>{
    try {
        const id = req.query.id;
        if (!id) res.redirect("/home");
        else{
            const db = getDb();

            db.collection("submissions").deleteOne({ _id: new ObjectId(id) });
            res.redirect("/submissions");
        }
    }catch(err){
        console.log(err);
        res.redirect("/home");
    }

}