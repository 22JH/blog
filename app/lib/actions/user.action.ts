"use server";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { NextResponse } from "next/server";
import { connectToDB } from "../mongoose";

export async function createUser(id: string, password: string) {
  const hash = await bcrypt.hash(password, 10);
  try {
    connectToDB();
    await User.create({
      id,
      password: hash,
      email: "toitoii080@gmail.com",
      role: "admin",
    });
  } catch (err) {
    throw new Error(`유저 생성 실패 : ${err}`);
  }
  return NextResponse.redirect("/post/all", 302);
}
