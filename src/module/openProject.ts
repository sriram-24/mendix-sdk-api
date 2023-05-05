import { App, OnlineWorkingCopy } from "mendixplatformsdk";

/**
 * Documentation
 * @param {App} app 
 * @param {String} branch 
 * @returns 
 */
const getWorkingCopyFromBranch = async( app : App ,branch : string ) => {
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

const openWorkingModel = async(workingCopy : OnlineWorkingCopy) =>{
    try {

        const model = await workingCopy.openModel();
        return model;

    } catch ( error : any ) {

        throw new Error(error)

    }
    
}

const initializeProject =async ( appid : string, branch : string  ) => {
  
    try{

        

    }catch( err : any ){
        throw new Error(err)
    }
}

module.exports = {
    getWorkingCopyFromBranch,
    openWorkingModel
}