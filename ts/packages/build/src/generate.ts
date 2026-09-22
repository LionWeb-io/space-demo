import { writeFileSync } from "node:fs"
import { generateApiFromLanguages } from "@lionweb/class-core-generator"
import { LionWebVersions } from "@lionweb/core"
import { deserializeLanguagesWithIoLionWebMpsSpecificFrom, repairIoLionWebMpsSpecificAnnotations } from "@lionweb/io-lionweb-mps-specific"
import { LionWebJsonChunk } from "@lionweb/json"
import { readFileAsJsonSync } from "@lionweb/node-utils"
import { generatePlantUmlForLanguage, genericAsTreeText, languagesAsText } from "@lionweb/utilities"


const languagesJson = readFileAsJsonSync("../../../chunks/space.languages.json") as LionWebJsonChunk
repairIoLionWebMpsSpecificAnnotations(languagesJson)
const spaceLanguages = deserializeLanguagesWithIoLionWebMpsSpecificFrom({ serializationChunk: languagesJson })

writeFileSync("artifacts/space.languages.txt", languagesAsText(spaceLanguages))

spaceLanguages.forEach((language) => {
    writeFileSync(`artifacts/${language.name}.puml`, generatePlantUmlForLanguage(language))
})

generateApiFromLanguages(spaceLanguages, "../space-dsl/src/gen", LionWebVersions.v2023_1)


const modelJson = readFileAsJsonSync("../../../chunks/voyager1.instance.json") as LionWebJsonChunk
writeFileSync(`artifacts/voyager1.txt`, genericAsTreeText(modelJson, spaceLanguages))

