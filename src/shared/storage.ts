// these both have to be cjs, 'cause of esm modules
// in electron. always make sure imports are
// from /cjs
import { createStore } from "tinybase/cjs";
import { createIndexedDbPersister } from "tinybase/cjs/persisters/persister-indexed-db";

// there is also an option for an sqlite3 persister
// import {createSqlite3Persister} from "tinybase/cjs/persisters/persister-sqlite3"

// your store/database
export const store = createStore();

// persist to indexedDB
const persister = createIndexedDbPersister(store, "__electrostatic_db", 5);

// save the store on load
// and prepare autosaving
persister.save();
persister.startAutoSave();
