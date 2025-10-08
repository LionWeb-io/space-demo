import { INodeBase } from "@lionweb/class-core"
import { observer } from "mobx-react"
import React from "react"
import { FaPlug, FaBatteryFull, FaBatteryHalf } from "react-icons/fa"

import { PowerModule, PowerConsumer, PowerSource } from "./gen/PowerBudget.g.js"


export const Projection = observer(({ node }: { node: INodeBase }) => {

    if (node === undefined) {
        return <span>model is empty</span>
    }

    if (node instanceof PowerModule) {
    return (
    <div> 
        power module {node.name} 
        { node.contents && node.contents.length > 0  && (
            <ul>
                { node.contents.map( (child) => (
                    <li key = {child.id}>
                        <Projection node = {child} />
                    </li> )) }
            </ul>                
        )}
    </div>
    )
}

    if (node instanceof PowerConsumer) {
        return <div> <FaPlug/> power consumer {node.name} with peak <input type ="number" value = {node.peak} onChange = {(e) => {node.peak = parseInt(e.target.value)}} /></div>
    }

    if (node instanceof PowerSource) {
        return <div> <FaBatteryHalf/> power source {node.name} with peak <input type ="number" value = {node.peak} onChange = {(e) => {node.peak = parseInt(e.target.value)}} </div>
    }


    return <span>No projection defined for node of classifier "{node.classifier.name}"</span>

})

