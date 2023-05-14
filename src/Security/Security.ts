import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import { openWorkingModel } from "../module/openProject";
import { RoleObject, SecurityObject, childObject } from "../module/Definitions";
import { IModel, security  } from "mendixmodelsdk";


export const getSecurity = async(appid: string, branch : string) =>{
    setPlatformConfig({mendixToken: process.env.MENDIX_TOKEN})
        const client = new MendixPlatformClient()
        
        const app = await client.getApp(appid)
        
        const workingCopy = await app.createTemporaryWorkingCopy(branch);
        const model = await openWorkingModel(workingCopy)
        
        const allUserRoles:Array<string> = [];
        const allModuleRoles:Array<RoleObject> = [];
        const allProperties:Array<string> = []
        let id = 0
        model.allAuthentications()
        
        let rootObject: SecurityObject = {
            id:id+1,
            name:app.appId,
            children :[]
        } 
        id++
        let userRoleCollector : Array <childObject>=[]
        let moduleRoleFinal : Array<childObject>=[]
        
        let childrens = await getUserRolesFromProjectSecurity(model)
        rootObject.children = childrens
        return rootObject





    //     model.allProjectSecurities().forEach(async (security) => {
    //     security.userRoles.forEach(async (role) => {
    //         let moduleRoleCollector: Array<string> = await role.load().then(user => user.moduleRolesQualifiedNames);
    //         for (let index = 0; index < moduleRoleCollector.length; index++) {
    //             const moduleroleName = moduleRoleCollector[index];
    //             if (moduleroleName !== null) {
    //                 console.log("module role loop in : " + moduleroleName);
    //                 let userroleQualifiedName: string = moduleroleName;
    //                 const modulerole = model.findModuleRoleByQualifiedName(userroleQualifiedName);
    //                 let childObject: childObject = {
    //                     id: id,
    //                     name: modulerole?.name
    //                 };
    //                 id++;
    //                 moduleRoleFinal.push(childObject);
    //             }

    //         }
    //         console.log(moduleRoleCollector);
    //         let parentObject: SecurityObject = {
    //             id: id,
    //             name: role.name,
    //             children: moduleRoleFinal
    //         };
    //         id++;
    //         userRoleCollector.push(parentObject);
    //         rootObject.children.push(parentObject);
    //         moduleRoleFinal = [];
    //         role.load().then(userrole => {
    //             moduleRoleCollector = userrole.moduleRolesQualifiedNames;
    //             // let moduleRolesQualifiedNames = userrole.moduleRolesQualifiedNames
    //             // console.log(moduleRolesQualifiedNames);
    //             // for (let index = 0; index < moduleRolesQualifiedNames.length; index++) {
    //             //     const moduleroleName = moduleRolesQualifiedNames[index];
    //             //     if(moduleroleName!==null){
    //             //         console.log("module role loop in : " + moduleroleName);
    //             //         let userroleQualifiedName:string = moduleroleName
    //             //         const modulerole = model.findModuleRoleByQualifiedName(userroleQualifiedName)
    //             //         let childObject : childObject = {
    //             //             id:id,
    //             //             name: modulerole?.name
    //             //         }
    //             //         id++
    //             //         moduleRoleCollector.push(childObject)
    //             //     }
    //             // }
    //             // console.log(moduleRoleCollector);
    //             // let parentObject : SecurityObject ={
    //             //     id:id,
    //             //     name:userrole.name,
    //             //     children:moduleRoleCollector
    //             // }
    //             // id++
    //             // userRoleCollector.push(parentObject)
    //         });
    //         console.log(userRoleCollector);





    //     });


    // }
    // )
        
        
    //     console.log("final object : " +rootObject);
        
    //     return rootObject
        
        
        
}



export const getUserRolesFromProjectSecurity = async(model : IModel) => {
    let id = 0
    let userRoleCollector : Array <childObject>=[]
    
    let allProjectSecurities = model.allProjectSecurities()

    for (let index = 0; index < allProjectSecurities.length; index++) {
        const modelsecuirty = allProjectSecurities[index];

        for (let index = 0; index < modelsecuirty.userRoles.length; index++) {
            const originalUserRole = modelsecuirty.userRoles[index];
            const moduleRole = await loadUserRole(originalUserRole)
            let moduleRoleFinal : Array<childObject>=[]
            for (let index = 0; index < moduleRole.length; index++) {
                const moduleroleName = moduleRole[index];
                if (moduleroleName !== null) {
                    console.log("module role loop in : " + moduleroleName);
                    let userroleQualifiedName: string = moduleroleName;
                    
                    if(userroleQualifiedName !==null){
                        let childObject: childObject = {
                            id: id,
                            name: userroleQualifiedName
                        };
                        id++;
                        moduleRoleFinal.push(childObject);
                    }
                }

            }

            // console.log(moduleRoleCollector);
            let parentObject: SecurityObject = {
                id: id,
                name: originalUserRole.name,
                children: moduleRoleFinal
            };
            id++;
            userRoleCollector.push(parentObject);
            

        }
        
    }
    
    
    return userRoleCollector
        
}

export const loadUserRole = async(role : security.IUserRole) => {
    
    let loadedRole = await role.load()
    return loadedRole.moduleRolesQualifiedNames
        
    
}
