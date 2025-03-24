"use client";

import { useForm } from "react-hook-form";
import { createItem } from "./create-item-action";

/* 
export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`CREATE TABLE marketplace (
      id integer primary key autoincrement not null,
      user_id integer not null,
      name text not null,
      description text not null,
      category text not null,
      price integer not null,
      created_at integer not null,
      foreign key (user_id) references users (id)
    ) STRICT`.execute(db);
}
*/


interface FormValues {
  name: string;
  description: string,
  category: string,
  price: number
}

export function NewItemForm() {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form
      className="grid grid-cols-1"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        createItem(data.name, data.description, data.category, data.price)
      })}
    >
      <label className="my-4 input input-bordered flex items-center gap-2">
        name
        <input
          {...register("name")}
          type="text"
          className="grow"
        />
      </label>
      <textarea
        {...register("description")}
        className="textarea textarea-bordered"
        placeholder="Text ..."
      ></textarea>
      <label className="my-4 input input-bordered flex items-center gap-2">
        category
        <input
          {...register("category")}
          type="text"
          className="grow"
        />
      </label>
      <label className="my-4 input input-bordered flex items-center gap-2">
        price
        <input
          {...register("price")}
          type="number"
          className="grow"
        />
      </label>
      <input className="btn btn-sm btn-outline" type="submit" value="Create" />
    </form>
  );
}
