import { App, MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "mendixplatformsdk";

import { getDuplicatedMicroflowsFromModel } from './DuplicatedFiles'
import { ParsedQs } from 'qs';

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

        throw new Error(error)
        
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

        throw new Error(error)

    }
    
}




// export default initializeProject