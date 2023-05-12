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