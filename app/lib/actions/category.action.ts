"use server";

import { SelectOption } from "@/app/types/category.type";
import Category from "../models/category.model";
import { connectToDB } from "../mongoose";

export async function getCategory(): Promise<SelectOption[]> {
  connectToDB();
  try {
    const category = (await Category.find().lean()) as SelectOption[];
    category.forEach((category) => {
      category._id = category._id?.toString();
    });
    return category;
  } catch (err: any) {
    throw new Error(`Failed to get categories : ${err.message}`);
  }
}

export async function createCategory(
  categories: SelectOption[]
): Promise<string[] | undefined> {
  if (!categories) return;
  try {
    connectToDB();
    let categoryIds = [];
    for (let category of categories) {
      let res = await Category.findOneAndUpdate(
        { label: category.label, value: category.value },
        { $inc: { count: 1 } },
        { upsert: true, new: true }
      );
      categoryIds.push(res._id.toString());
    }
    return categoryIds;
  } catch (err: any) {
    throw new Error(`Failed to create categories : ${err.message}`);
  }
}

export async function deleteCategory(
  categories: SelectOption[] | undefined
): Promise<string[] | undefined> {
  if (!categories) return;
  try {
    connectToDB();
    let categoryIds = [];
    for (let category of categories) {
      let res = await Category.findOneAndUpdate(
        { label: category.label, value: category.value },
        { $inc: { count: -1 } },
        { upsert: true, new: true }
      );
      categoryIds.push(res._id.toString());
    }
    return categoryIds;
  } catch (err: any) {
    throw new Error(`Failed to create categories : ${err.message}`);
  }
}
