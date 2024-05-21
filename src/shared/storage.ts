import { createIndexedDbPersister } from "tinybase/cjs/persisters/persister-indexed-db";
// these both have to be cjs, 'cause of esm modules
// in electron. always make sure imports are
// from /cjs
import { createStore } from "tinybase/cjs/with-schemas";

// your store/database
export const store = createStore().setTablesSchema({
  contact: {
    name: {
      type: "string",
    },
    phoneNumber: {
      type: "number",
    },
  },
});

// persist to indexedDB
const persister = createIndexedDbPersister(store, "electrostatic_db", 5);

// save the store on load
// and prepare autosaving
persister.save();
persister.startAutoSave();
