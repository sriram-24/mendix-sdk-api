import { App, MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "mendixplatformsdk";

import { getDuplicatedMicroflowsFromModel, getDuplicatedPagesFromModel, getDuplicatedNanoflowsFromModel } from './DuplicatedFiles'
import { ParsedQs } from 'qs';
import { MainObject, MicroflowObject, NanoflowObject, PageObject, Scopes } from "./Definitions";

/**
 * Documentation
 * @param {App} app 
 * @param {String} branch 
 * @returns 
 */
export const getWorkingCopyFromBranch = async( app : App ,branch : string ) => {
    try {
        
        const workingCopy = await app.createTemporaryWorkingCopy(branch);
        return workingCopy;

    } catch (error : any) {
        console.log(error)
        throw error
        
    }
}

/**
 * Documentation 
 * @param {OnlineWorkingCopy} workingCopy 
 * @returns 
 */

export const openWorkingModel = async(workingCopy : OnlineWorkingCopy) =>{
    try {

        const model = await workingCopy.openModel();
        return model;

    } catch ( error : any ) {
        console.log(error)
        throw error

    }
    
}

export const initializeProject = async( appid : string, branch : string, scopeArray: Array<string> | undefined ) => {
  
    try{
        let mainObject : MainObject  = {
            microflows : [],
            pages : []
        }

        let duplicatedmicroflows : Array<MicroflowObject> = [];
        let duplicatedPages : Array<PageObject> = [];
        let duplicatedNanoflows : Array<NanoflowObject> = [];

        setPlatformConfig({mendixToken: process.env.MENDIX_TOKEN})
        const client = new MendixPlatformClient()
        const app = await client.getApp(appid)
        const workingCopy = await app.createTemporaryWorkingCopy(branch);
        const model = await openWorkingModel(workingCopy)
        
        scopeArray?.forEach((scope:String)=>{
            
        switch (scope) {

            case Scopes.miroflows :
                console.log('Duplicate microflow verification started');
                duplicatedmicroflows = getDuplicatedMicroflowsFromModel(model)
                mainObject.microflows = duplicatedmicroflows
                break;

            case Scopes.pages : 
                console.log('Duplicate page verification started');
                duplicatedPages = getDuplicatedPagesFromModel(model)
                mainObject.pages = duplicatedPages
                break;

            case Scopes.nanoflows : 
                console.log('Duplicate nanoflow verification started');
                duplicatedNanoflows = getDuplicatedNanoflowsFromModel(model)
                mainObject.nanoflows = duplicatedNanoflows
                break;

            default:
                break;
                
        }
            
        })

        return mainObject
        
    }catch( err : any ){
        console.log( "Error from function : " +err)
        throw err
    }
}




// export default initializeProject