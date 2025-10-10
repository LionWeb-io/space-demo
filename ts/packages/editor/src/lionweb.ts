import { asTreeTextWith, INodeBase } from "@lionweb/class-core"
import { LionWebClient } from "@lionweb/delta-protocol-client"
import { createBrowserLowLevelClient } from "@lionweb/delta-protocol-low-level-client-browser"

import { allLanguageBases } from "./gen/index.g"
import { store } from "./store"
import modelJson from "../../../../chunks/voyager1.instance.json" assert { type: "json" }
    // (ignore the warning "assert" needing to be "with"!)


export const logModel = (model: INodeBase[]) => {
    console.log(
        asTreeTextWith(
            (node) =>
                "name" in node ? (node.name as string) : node.id
        )(model)
    )
}




export const initializeLionWeb = () => {
    console.log(`creating client`)
    LionWebClient.create({
        clientId: "TS-client-1",
        url: "ws://localhost:40001",
        languageBases: allLanguageBases,
        lowLevelClientInstantiator: (lowLevelClientParameters) =>
            createBrowserLowLevelClient(lowLevelClientParameters, console.dir),
        semanticLogger: console.dir
    })
        .then((client) => {
            console.log(`client created; signing in`)
            const model = client.deserializer(modelJson)
            logModel(model)
            client.signOn("query-1", "repo-1")
                .then(() => {
                    console.log(`signed on; adding all partitions`)
                    model.forEach((partition) => {
                        client.addPartition(partition)
                    })
                    // cause it to render:
                    store.setModel(model)
                })
        })
}

