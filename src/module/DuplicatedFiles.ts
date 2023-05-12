import { IModel } from "mendixmodelsdk"
import { MicroflowObject, NanoflowObject, PageObject } from "./Definitions";

/**
 * Documentation for getting duplicated microflows
 * @param {IModel} model 
 * @returns 
 */

const regexForDulicateFiles = new RegExp('[a-zA-Z]+_[0-9]');

export const getDuplicatedMicroflowsFromModel  = ( model : IModel ) : Array <MicroflowObject>  => {

    let microflows : Array <String> = [];
    let duplicatedmicroflows : Array<MicroflowObject> = [];
    

    model.allMicroflows().forEach((microflow) => {
           
        microflows.push(microflow.name);
        if (regexForDulicateFiles.test(microflow.name)) {

            let object : MicroflowObject = {
                name : microflow.name,
                excluded : microflow.excluded
            }

            duplicatedmicroflows.push(object);

        }

    });

    return duplicatedmicroflows;

}

/**
 * Documentation for getting duplicated pages
 * @param {IModel} model 
 * @returns 
 */

export const getDuplicatedPagesFromModel = (model : IModel ) => {

    let duplicatedPages:Array<PageObject> = [];
    model.allPages().forEach((page) => {
        if(regexForDulicateFiles.test(page.name)){

            let object: PageObject = {
                name : page.name,
                excluded : page.excluded 
            }
            duplicatedPages.push(object)
        }
    })

    return duplicatedPages;
}

/**
 * Documentation for getting duplicated nanoflows
 * @param {IModel} model 
 * @returns 
 */

export const getDuplicatedNanoflowsFromModel = (model : IModel) =>{

    let duplicatedNanoflows : Array<NanoflowObject> = [];
    
    model.allNanoflows().forEach((nanoflow) =>{
        
        if(regexForDulicateFiles.test(nanoflow.name)){
            
            let object : NanoflowObject = {
                name : nanoflow.name,
                excluded : nanoflow.excluded
            }
            duplicatedNanoflows.push(object)
        }

    })
    
    return duplicatedNanoflows;
}