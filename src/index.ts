import express, { Express, Request, Response } from 'express';
const bodyParser = require('body-parser');
const {executescript, getDuplicatedMicroflowsFromProject} = require('./src/getDuplicates.js')

require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const port = 4000

app.get('/microflows/duplicated', (req : Request, res : Response ) =>{

    const appid = req.query.appid;
    const branch = req.query.branch;

    if(appid && branch){
        
        getDuplicatedMicroflowsFromProject(appid,branch).then((arr : Array<MicroflowObject> ) => {
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