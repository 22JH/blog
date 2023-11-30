"use server";

import { SelectOption } from "@/app/types/category.type";
import Category from "../models/category.model";
import { connectToDB } from "../mongoose";

export async function getCategory(): Promise<SelectOption[]> {
  connectToDB();
  try {
    const category = (await Category.find(
      {},
      { label: 1, count: 1, value: 1 }
    ).lean()) as SelectOption[];
    return category;
  } catch (err: any) {
    throw new Error(`카테고리 가져오기 실패 : ${err.message}`);
  }
}

export async function createCategory(
  categories: string[]
): Promise<string[] | undefined> {
  if (!categories) return;
  try {
    connectToDB();
    console.log(categories, "cateogries");
    for (let category of categories) {
      await Category.findOneAndUpdate(
        { label: category },
        { $inc: { count: 1 }, $set: { value: `${category} ${category}` } },
        { upsert: true, new: true }
      );
    }
  } catch (err: any) {
    throw new Error(`카테고리 생성 실패 : ${err.message}`);
  }
}

export async function deleteCategory(
  categories: string[] | undefined
): Promise<string[] | undefined> {
  if (!categories) return;
  try {
    connectToDB();
    for (let category of categories) {
      await Category.findOneAndUpdate(
        { label: category },
        { $inc: { count: -1 } },
        { upsert: true, new: true }
      );
    }
  } catch (err: any) {
    throw new Error(`카테고리 삭제 실패 : ${err.message}`);
  }
}
