import express, { Express, Request, Response } from 'express';

import { MicroflowObject } from './module/Microflow';
import  { getWorkingCopyFromBranch, openWorkingModel } from './module/openProject';
import { MendixPlatformClient, setPlatformConfig } from 'mendixplatformsdk';
import { getDuplicatedMicroflowsFromModel } from './module/DuplicatedFiles';
const bodyParser = require('body-parser');


require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const port = 4000


const initializeProject =async ( appid : string, branch : string  ) => {
  
    try{
    setPlatformConfig({mendixToken: process.env.MENDIX_TOKEN})
    const client = new MendixPlatformClient()
    const app = await client.getApp(appid)
    const workingCopy = await getWorkingCopyFromBranch(app,branch)
    const model = await openWorkingModel(workingCopy)
    const duplicatedmicroflows = getDuplicatedMicroflowsFromModel(model)

    return duplicatedmicroflows
    

    }catch( err : any ){
        throw new Error(err)
    }
}

app.get('/microflows/duplicated', (req : Request, res : Response ) =>{

    const appid  = req.query.appid?.toString();
    const branch = req.query.branch?.toString();

    if(appid && branch){
        
        initializeProject(appid,branch).then((arr : Array<MicroflowObject> ) => {
            res.json(arr)
        }).catch(
            ( err : String ) =>{
                console.log(err);
                res.json(err);
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