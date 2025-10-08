// SPDX-FileCopyrightText: 2025 TRUMPF Laser SE
//
// SPDX-License-Identifier: LicenseRef-TRUMPF

import {LionWebJsonChunk, LionWebJsonMetaPointer} from "@lionweb/json"
import {ioLionWebMpsSpecificLanguage} from "@lionweb/io-lionweb-mps-specific"

/**
 * Replaces stated version "0" of language "io-lionweb-mps-specific" with its actual version.
 */
export const repairIoLionWebMpsSpecificAnnotations = (serializationChunk: LionWebJsonChunk) => {
    serializationChunk.languages.forEach((usedLanguage) => {
        if (usedLanguage.key === ioLionWebMpsSpecificLanguage.key) {
            usedLanguage.version = ioLionWebMpsSpecificLanguage.version
        }
    })
    const repairMetaPointer = (metaPointer: LionWebJsonMetaPointer): void => {
        if (metaPointer.language === ioLionWebMpsSpecificLanguage.key) {
            metaPointer.version = ioLionWebMpsSpecificLanguage.version
        }
    }
    serializationChunk.nodes.forEach((node) => {
        repairMetaPointer(node.classifier)
        node.properties.forEach((propertySetting) => {
            repairMetaPointer(propertySetting.property)
        })
        node.containments.forEach((containmentSetting) => {
            repairMetaPointer(containmentSetting.containment)
        })
        node.references.forEach((referenceSetting) => {
            repairMetaPointer(referenceSetting.reference)
        })
    })
}

// FIXME  this has to be moved into @lionweb/io-lionweb-mps-specific

