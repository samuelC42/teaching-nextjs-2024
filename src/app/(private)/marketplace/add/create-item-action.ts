"use server";

import { redirect } from "next/navigation";
import { assertAuth } from "../../../../lib/auth";
import { createDB } from "../../../../lib/db";

export async function createItem(name: string, description: string, category: string, price: number) {

  const userId = assertAuth();

  const db = createDB();

  const newItem = await db
    .insertInto("marketplace")
    .values({
      userId,
      name: name,
      category: category,
      description: description,
      price: price,
      createdAt: new Date().getTime(),
    })
    .returningAll()
    .executeTakeFirstOrThrow();

  console.log(newItem);

  redirect(`/marketplace`);
}
