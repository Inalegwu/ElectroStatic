// these both have to be cjs, 'cause of esm modules
// in electron
import { createStore } from "tinybase/cjs";
import { createIndexedDbPersister } from "tinybase/cjs/persisters/persister-indexed-db";

export const store = createStore();

const persister = createIndexedDbPersister(store, "__electrostatic_db", 5);

persister.save();
persister.startAutoSave();
