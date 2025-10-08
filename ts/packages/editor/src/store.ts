import { nodeBaseDeserializer } from "@lionweb/class-core"
import { LionWebJsonChunk } from "@lionweb/json"
import { makeObservable, observable } from "mobx"

import { PowerBudgetBase } from "./gen/PowerBudget.g.js"
import modelJson from "../../../../voyager1.json" assert { type: "json" }

export const deserialized = (chunk: LionWebJsonChunk) =>
    nodeBaseDeserializer([PowerBudgetBase.INSTANCE])(chunk)
const model = deserialized(modelJson)

export class Store {

    // TODO  implement multi-model store?
    model = model

    constructor() {
        makeObservable(
            this,
            {
                model: observable
            }
        )
        // TODO  implement a reaction that auto-saves
    }

}


export const store = new Store()

