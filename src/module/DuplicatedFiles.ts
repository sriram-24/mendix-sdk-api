import { Model } from "mendixmodelsdk"



const getDuplicatedMicroflowsFromModel  = ( model : Model ) : Array <MicroflowObject>  => {

    let microflows : Array <String> = [];
    let duplicatedmicroflows : Array<MicroflowObject> = [];
    let regex = new RegExp('[a-zA-Z]+_[0-9]');

    model.allMicroflows().forEach((microflow) => {
           
        microflows.push(microflow.name);
        if (regex.test(microflow.name)) {

            let object : MicroflowObject = {
                name : microflow.name
            }

            duplicatedmicroflows.push(object);

        }

    });

    return duplicatedmicroflows;

}

module.exports = {
    getDuplicatedMicroflowsFromModel
}


