import { moon } from "../icon/moon";
import { sun } from "../icon/sun";
import { cookies } from "next/headers";
import { toggleBtn } from "./ToggleBtn.css";
import SVGmorph from "./SVGmorph";
export default function ToggleBtn() {
  const theme = cookies().get("theme");
  const handleTheme = async () => {
    "use server";
    if (theme?.value === "dark") {
      cookies().set("theme", "light");
    } else {
      cookies().set("theme", "dark");
    }
  };
  return (
    <form action={handleTheme}>
      <button className={toggleBtn}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SVGmorph paths={[sun, moon, sun]} theme={theme?.value || "dark"} />
        </svg>
      </button>
    </form>
  );
}
