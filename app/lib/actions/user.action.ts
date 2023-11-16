"use server";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { NextResponse } from "next/server";

export async function createUser(id: string, password: string) {
  const hash = await bcrypt.hash(password, 10);
  try {
    await User.create({
      id,
      password: hash,
      email: "toitoii080@gmail.com",
      role: "admin",
    });
  } catch (err) {
    throw new Error(`Failed to create user${err}`);
  }
  return NextResponse.redirect("/post/all", 302);
}
