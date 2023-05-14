import express, { Express, Request, Response } from 'express';

import { Branch, MainObject, MicroflowObject } from './module/Definitions';
import { initializeProject } from './module/openProject';
import { getBranchesFromApp } from './module/getBranches';
import { getSecurity } from './Security/Security';

const bodyParser = require('body-parser');


require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

const port = 4000

app.get('/project/performancereport', (req : Request, res : Response ) =>{

    const appid  = req.query.appid?.toString();
    const branch = req.query.branch?.toString();
    const scope = req.query.scope?.toString();
    const scopeArray = scope?.split(',');
    console.log(scope);
    

    if(appid && branch){
        
        initializeProject(appid,branch,scopeArray).then((arr : MainObject ) => {
            res.status(200)
            res.json(arr)
            
        }).catch(
            ( err : String ) =>{
                console.log("error  from api : " +err);
                let object:Object = {
                    code:500,
                    message : err
                }
                res.status(500);
                res.json(object);
            }
        )
    }
    else{
        res.status(400);
        res.json({"error": "missing query parameters."})
    }
})

// API for getting repositories from app

app.get('/project/getbranches', (req : Request, res : Response) => {

    const appid  = req.query.appid?.toString();

    if(appid){
        getBranchesFromApp(appid).then((branches : Array<Branch>) =>{
            res.status(200)
            res.json(branches)
        }).catch((err : any)=>{
            console.log("error  from api : " +err);
            let object:Object = {
                code:500,
                message : err
            }
            res.status(500);
            res.json(object);
        })
    }else{
        res.status(400);
        res.json({"error": "missing query parameters."})
    }


})

app.get('/project/secuirty', (req : Request, res : Response) => {

    const appid:string  = req.query.appid!.toString();
    const branch = req.query.branch?.toString();


    if(appid && branch){
        getSecurity(appid,branch).then(roles =>{
            console.log(JSON.stringify(roles));
            
            res.json(roles)
         })
    }
    
    else{
        res.status(400);
        res.json({"error": "missing query parameters."})
    }


})

app.listen(port,()=>{

    console.log(`App is listening on port ${port}`);

})