import { PartialBlock } from "@blocknote/core";

export function saveToStorage(jsonBlocks: string) {
        localStorage.setItem("formly", jsonBlocks);
    }

export function loadFromStorage() {
        const storageString = localStorage.getItem("formly");
        return storageString
            ? (JSON.parse(storageString) as PartialBlock[])
            : undefined;
    }