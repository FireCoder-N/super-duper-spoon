import { getDb } from "./db.mjs"

export const uploadToDB = (req, res) => {
    // console.log("submit:", req.body);
    
    try {

        let db = getDb();

        db.collection('submissions').insertOne(
            {
                "locationID": req.session.formaccess["id"].substring(1),
                "submitterID": req.session.user["username"],
                "mainCategory": getGr(req.body["type"]),
                "subCategory": req.body["specifics"],
                "comments": req.body["comment"],
                "date": req.body["date"]	
            }
        );

    } catch(err) {
        console.log(err);
    }
    res.redirect('/home');
}



function getGr(item){
    switch (item) {
        case "electronics":
            return "Ηλεκτρολογικά";
        case "plumbing":
            return "Υδραυλικά";
        case "structural":
            return "Δομικά";
        case "other":
            return "Άλλο";
        default:
            break;
    }
}