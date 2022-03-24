import express from 'express'
const bloat_router = express.Router()
import cors from 'cors'
import bodyParser from 'body-parser'

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

bloat_router.use(cors(corsOptions)) // Use this after the variable declaration

//serve public folder
bloat_router.use(express.static('public'));

bloat_router.use(bodyParser.json({
    parameterLimit: 100000,
    limit: '50mb'
}));
bloat_router.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}));

//export routers
export default bloat_router;
