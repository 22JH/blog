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
      })}>
      <GuestBookComments comments={comments} />
      {/* <GuestBookInput />  useOptimistic을 사용하고 addOptimistic을 prop해주기 위해 GuestBookComments 내로 이동*/}
    </div>
  );
}
