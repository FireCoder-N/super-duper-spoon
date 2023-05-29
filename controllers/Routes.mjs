import { badRequest, forbidden } from "./ErrorHandling.mjs"

export const login = (req, res) => {
    res.render("login");
}

export const homepage = (req, res) => {
    res.render("home");
}

export const floorplan = (req, res) => {
    const f = req.query.f;
    const pattern = /^(-1|[0-3])$/;

    if (!f) 
        res.redirect("/home");
    else if (!pattern.test(f)) 
        badRequest(req, res);
    else
        res.render("floor", {floor: f});
}

export const form = (req, res) => {
    const t = req.query.t;
    const pattern = /^[0-5]$/;

    if (!req.session.formaccess)
        forbidden(req, res);
    else if (!t || !pattern.test(t))
        badRequest(req, res);
    else
        res.render("form");
}

export const privacy = (req, res) => {
    res.render("privacy");
}

export const admin = (req, res) => {
    res.render("sub");
}