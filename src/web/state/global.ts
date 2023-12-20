import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist";
import { GlobalState } from "@shared/types";

// default global state example for working with
// legend state
// Legend state supports working with a single large
// state object or 
// tiny atomic state objects
const globalState$ = observable<GlobalState>({
  colorMode: "dark",
});

export function useGlobalState() {
  return globalState$.get();
}

// persist global state to local storage
// based on the configureObservablePersistence configuration
// observable level persist can be configured using
// pluginLocal and pluginRemote options
persistObservable(globalState$,{
  local:"global_state"
})
