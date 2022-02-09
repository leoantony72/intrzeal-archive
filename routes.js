import {getpost} from "./controllers/getpost.js"
 
export default function (app) {
    app.get("/healthcheck", (req, res) => {
        return res.status(200).json({"success":"success"})
    })

    app.get("/posts",getpost)
}