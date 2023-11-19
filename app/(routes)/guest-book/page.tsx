import GuestBookInput from "@/app/components/guestBook/GusetBookInput";
import GuestBookComments from "@/app/components/guestBook/GuestBookComments";
import { getGusetBook } from "@/app/lib/actions/guestBook.action";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default async function GuestBook() {
  const comments = await getGusetBook();
  return (
    <div
      style={assignInlineVars({
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <GuestBookComments comments={comments} />
      <GuestBookInput />
    </div>
  );
}
