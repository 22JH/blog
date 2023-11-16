import GuestBookInput from "@/app/components/guestBook/GusetBookInput";
import styles from "./guestBook.module.css";
import GuestBookComments from "@/app/components/guestBook/GuestBookComments";
import { getGusetBook } from "@/app/lib/actions/guestBook.action";
import { getProviders } from "next-auth/react";

export default async function GuestBook() {
  const comments = await getGusetBook();
  return (
    <div className={styles.guestBookContainer}>
      <GuestBookComments comments={comments} />
      <GuestBookInput />
    </div>
  );
}
