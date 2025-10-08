import { writeFileSync } from "fs"
import { generateApiFromLanguages } from "@lionweb/class-core-generator"
import { deserializeLanguages } from "@lionweb/core"
import { ioLionWebMpsSpecificLanguage } from "@lionweb/io-lionweb-mps-specific"
import { LionWebJsonChunk } from "@lionweb/json"
import { generatePlantUmlForLanguage, languagesAsText, readFileAsJson } from "@lionweb/utilities"


const languagesJson = readFileAsJson("../../../languages.json") as LionWebJsonChunk
const spaceLanguages = deserializeLanguages(languagesJson, ioLionWebMpsSpecificLanguage)

writeFileSync("artifacts/space.languages.txt", languagesAsText(spaceLanguages))

spaceLanguages.forEach((language) => {
    writeFileSync(`artifacts/${language.name}.puml`, generatePlantUmlForLanguage(language))
})

generateApiFromLanguages(spaceLanguages, "../editor/src/gen")

