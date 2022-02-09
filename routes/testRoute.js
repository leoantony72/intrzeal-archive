const router = require('express').Router();

import { getPost } from "../controllers/getPost.js"
 
export default function (app) {
    app.get("/healthcheck", (req, res) => {
        return res.status(200).json({"success":"success"})
    })

    app.get("/posts", getPost)
}

module.exports = router;