import {writeFileSync} from "fs"
import {generateLanguage} from "@lionweb/class-core-generator"
import {deserializeLanguages, serializeLanguages} from "@lionweb/core"
import {LionWebJsonChunk} from "@lionweb/json"
import { ioLionWebMpsSpecificLanguage } from "@lionweb/io-lionweb-mps-specific"
import {languageAsText, readFileAsJson, writeJsonAsFile} from "@lionweb/utilities"


const spaceLanguage = deserializeLanguages(readFileAsJson("../../../languages.json") as LionWebJsonChunk, ioLionWebMpsSpecificLanguage)[0]


writeFileSync("artifacts/Space.language.txt", languageAsText(spaceLanguage))

generateLanguage(spaceLanguage, "../editor/src/gen", {})

