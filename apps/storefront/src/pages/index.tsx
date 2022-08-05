import { log } from "logger";
import { CounterButton, NewTabLink } from "ui";

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div>
      <h1>Store1</h1>
      <CounterButton />
      <NewTabLink href="https://turborepo.org/">
        Built With TurboRepo
      </NewTabLink>
    </div>
  );
}
