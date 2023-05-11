export interface MicroflowObject {
    name : string,
    excluded : boolean
}

export interface PageObject {
    name: string,
    excluded:boolean
}

export enum Scopes{
    miroflows = "microflows",
    pages = "pages",
    nanoflows = "nanoflows"
}

export interface MainObject {
    microflows : Array<MicroflowObject>,
    pages : Array<PageObject>
}