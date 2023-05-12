import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk"
import { Branch } from "./Definitions"


export const getBranchesFromApp = async(appid : string) => {
    let brachesFromRepository : Array<Branch> = [];
    setPlatformConfig({mendixToken: process.env.MENDIX_TOKEN})
    const client = new MendixPlatformClient()
    const app = await client.getApp(appid)
    const repository = await app.getRepository()
    const branches = await repository.getBranches()
    
    branches.items.forEach((branch) => {
        let object : Branch = {
            name : branch.name,
            latestCommit : branch.latestCommit
        }
        brachesFromRepository.push(object)
    })

    return brachesFromRepository
        
}