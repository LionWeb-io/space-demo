import { observer } from "mobx-react"
import React from "react"

import { Projection } from "./projection.js"
import { store } from "./store.js"

export const App = observer(() => {
    return <>
        <h1>Space DSL — demo</h1>
        <p>
            This is a small web application that allows you to author a model in the space DSL.
        </p>
        { store.model.map( (node, index) => <Projection node = {node} key = {index} />) }
    </>
})

