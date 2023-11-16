import User from "@/app/lib/models/user.model";
import { connectToDB } from "@/app/lib/mongoose";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(res: Request) {
  try {
    connectToDB();
    const formData = await res.formData();
    const password = formData.get("password") as string;
    const hash = await bcrypt.hash(password, 10);
    const data = {
      id: formData.get("id"),
      password: hash,
      email: formData.get("email"),
      role: formData.get("role"),
    };
    User.create(data);
    return NextResponse.redirect("/post/all", 302);
  } catch (err) {
    throw new Error(`Failed to singup ${err}`);
  }
}
