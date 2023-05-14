import { ICommit } from "mendixplatformsdk"

export interface MicroflowObject {
    name : string,
    excluded : boolean
}

export interface PageObject {
    name: string,
    excluded:boolean
}

export interface NanoflowObject {
    name:string,
    excluded:boolean
}


export enum Scopes{
    miroflows = "microflows",
    pages = "pages",
    nanoflows = "nanoflows"
}

export interface MainObject {
    microflows : Array<MicroflowObject>,
    pages ?: Array<PageObject>,
    nanoflows ?: Array<NanoflowObject>
}

export interface Branch {
    name: string
    latestCommit : ICommit
}
export interface childObject{
    id: number
    name?:string
    children?:Array<childObject>
}

export interface SecurityObject {
    id: number
    name:string
    children:Array<childObject>
}

export interface RoleObject{
    module:string
    role:string
}