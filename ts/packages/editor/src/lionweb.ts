import { asTreeTextWith, INodeBase } from "@lionweb/class-core"
import { LionWebClient } from "@lionweb/delta-protocol-client"
import { createBrowserLowLevelClient } from "@lionweb/delta-protocol-low-level-client-browser"

import { allLanguageBases } from "./gen/index.g.js"
import { PowerModule, PowerSource } from "./gen/PowerBudget.g.js"
import { store } from "./store.js"

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


const maxLogLength = 200
const trimTo = (text: string) =>
    text.length <= maxLogLength
        ? text
        : (text.substring(0, maxLogLength - 1) + "…")   // limit it to exactly maxLogLength


export const initializeLionWeb = () => {
    console.log(`creating client`)
    let queryNumber = 0
    const queryId = () => `query-${++queryNumber}`
    LionWebClient.create({
        clientId: "TS-client-1",
        url: "ws://localhost:40000",
        languageBases: allLanguageBases,
        lowLevelClientInstantiator: (lowLevelClientParameters) =>
            createBrowserLowLevelClient(lowLevelClientParameters, (logItem) => {
                console.log(`low-level log item: ${trimTo(JSON.stringify(logItem))}`)
            }),
        semanticLogger: (logItem) => {
            console.log(trimTo(logItem.asText()))
        }
    })
        .then((client) => {
            console.log(`client created; signing in`)
            const model = client.deserializer(modelJson)
            logModel(model)
            client.signOn(queryId(), "myRepo")
                .then(() => {
                    console.log(`signed on; adding all partitions`)
                    client.subscribeToPartitionContents(queryId(), "1002563151016857164")   // TODO  look up ID from modelJson?
                        .then((receivedModelJson) => {
                            const receivedModel = client.deserializer(receivedModelJson)
                            store.setModel(receivedModel)
                        })
                    model.forEach((partition) => {
                        client.addPartition(partition)
                    })
                    // cause it to render:
                    store.setModel(model)
                    // make changes, to check whether they are sent:
                    setTimeout(() => {
                        const powerModule = model[0] as PowerModule
                        (powerModule.contents[0] as PowerSource).peak = 600
                        powerModule.name = "VGER"
                    }, 1)
                    // FIXME  these changes are NOT sent to the server (for some – presumably not so good! – reason)!
                })
        })
}

