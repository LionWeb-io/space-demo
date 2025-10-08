import { INodeBase } from "@lionweb/class-core"
import { observer } from "mobx-react"
import React from "react"

import { PowerModule } from "./gen/PowerBudget.g.js"


export const Projection = observer(({ node }: { node: INodeBase }) => {

    if (node === undefined) {
        return <span>model is empty</span>
    }
    if (node instanceof PowerModule) {
        return <span> power module {node.name} </span>
    }

    return <span>No projection defined for node of classifier "{node.classifier.name}"</span>

})

