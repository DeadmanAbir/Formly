import { PartialBlock } from "@blocknote/core";
import { v4 as uuidv4 } from "uuid";

export function saveToStorage(jsonBlocks: string) {
	localStorage.setItem("formly", jsonBlocks);
}

export function loadFromStorage() {
	const storageString = localStorage.getItem("formly");
	return storageString
		? (JSON.parse(storageString) as PartialBlock[])
		: undefined;
}

export function generateUUIDSegment(length = 6) {
	return uuidv4().replace(/-/g, "").slice(0, length);
}
