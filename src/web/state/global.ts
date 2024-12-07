import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist";

export const globalState$ = observable<GlobalState>({
  colorMode: "dark",
});

persistObservable(globalState$, {
  local: "global_state",
});
