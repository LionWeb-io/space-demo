import {ILanguageBase, LionCore_builtinsBase} from "@lionweb/class-core";

import * as PowerBudgetLanguage from "./PowerBudgetLanguage.g.js";
import * as FindingLanguage from "./FindingLanguage.g.js";

// ensure that all languages get wired up by triggering that through their first entity:
LionCore_builtinsBase.INSTANCE.String;
PowerBudgetLanguage.PowerBudgetLanguageBase.INSTANCE.IPowerModuleContent;
FindingLanguage.FindingLanguageBase.INSTANCE.Finding;

export const allLanguageBases: ILanguageBase[] = [
    PowerBudgetLanguage.PowerBudgetLanguageBase.INSTANCE,
    FindingLanguage.FindingLanguageBase.INSTANCE
];

export {
    PowerBudgetLanguage,
    FindingLanguage
};

