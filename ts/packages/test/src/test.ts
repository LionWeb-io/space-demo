import { asTreeTextWith, nodeBaseDeserializer } from "@lionweb/class-core"
import { LionWebJsonChunk } from "@lionweb/json"
import { readFileAsJsonSync } from "@lionweb/node-utils"

import { allLanguageBases } from "ts-space-demo-dsl"


const modelJson = readFileAsJsonSync("../../../chunks/voyager1.instance.json") as LionWebJsonChunk
const model = nodeBaseDeserializer(allLanguageBases)(modelJson)

console.log(
    asTreeTextWith(
        (node) =>
            "name" in node ? (node.name as string) : node.id
    )(model)
)

