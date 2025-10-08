import { asTreeTextWith, INodeBase, nodeBaseDeserializer } from "@lionweb/class-core"
import { LionWebJsonChunk } from "@lionweb/json"
import { makeObservable, observable } from "mobx"

import { allLanguageBases } from "./gen/index.g.js"

import modelJson from "../../../../voyager1.json" assert { type: "json" }
    // (ignore the warning "assert" needing to be "with"!)


export const deserialized = (chunk: LionWebJsonChunk) =>
    nodeBaseDeserializer(allLanguageBases)(chunk)
const model = deserialized(modelJson)


console.log(
    asTreeTextWith(
        (node) =>
            "name" in node ? (node.name as string) : node.id
    )(model)
)


export class Store {

    // TODO  implement multi-model store?
    model: INodeBase[]

    constructor(model: INodeBase[]) {
        this.model = model
        makeObservable(
            this,
            {
                model: observable
            }
        )
        // TODO  implement a reaction that auto-saves
    }

}


export const store = new Store(model)

