import { assignInlineVars } from "@vanilla-extract/dynamic";
import Intro from "../components/home/Intro";

export default async function Home() {
  return (
    <div
      style={assignInlineVars({
        height: "80dvh",
      })}
    >
      <Intro />
    </div>
  );
}
