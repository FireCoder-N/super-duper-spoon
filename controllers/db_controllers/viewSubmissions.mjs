import { getDb } from "./db.mjs";


export const getlist = async (req, res) => {
    const db = getDb();
    const submissionList = [];

    let submissions = db.collection("submissions").find({});
	while (await submissions.hasNext()) {
        submissionList.push(await submissions.next());
	}

    // console.log(submissionList);
    if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
		return res.send(JSON.stringify(submissionList));
	} else {
		return res.redirect('/');
	}


}