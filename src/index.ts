import express, { Express, Request, Response } from 'express';

import { MainObject, MicroflowObject } from './module/Definitions';
import { initializeProject } from './module/openProject';

const bodyParser = require('body-parser');


require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const port = 4000

app.get('/project/performancereport', (req : Request, res : Response ) =>{

    const appid  = req.query.appid?.toString();
    const branch = req.query.branch?.toString();
    const scope = req.query.scope?.toString();
    const scopeArray = scope?.split(',');
    console.log(scope);
    

    if(appid && branch){
        
        initializeProject(appid,branch,scopeArray).then((arr : MainObject ) => {
            
            res.json(arr)
            
        }).catch(
            ( err : String ) =>{
                console.log("error  from api : " +err);
                let object:Object = {
                    code:500,
                    message : err
                }
                res.json(object);
            }
        )
    }
    else{
        res.json({"error": "missing query parameters."})
    }
})

app.listen(port,()=>{

    console.log(`App is listening on port ${port}`);

})