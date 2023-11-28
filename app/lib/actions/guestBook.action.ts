"use server";

import { GusetBookType } from "@/app/types/gusetBook.type";
import { connectToDB } from "../mongoose";
import GuestBook from "../models/guestBook.model";
import { revalidatePath } from "next/cache";

export async function createGuestBook({
  text,
  name,
  thumbnail,
}: GusetBookType) {
  connectToDB();
  try {
    await GuestBook.create({
      text,
      name,
      thumbnail,
    });
    revalidatePath("/guest-book");
  } catch (err) {
    throw new Error(`Failed to create guest book ${err}`);
  }
}

export async function getGusetBook(): Promise<GusetBookType[]> {
  try {
    connectToDB();
    const guestBook = (await GuestBook.find().lean()) as GusetBookType[];
    return guestBook;
  } catch (err) {
    throw new Error(`Failed to get guset book ${err}`);
  }
}
