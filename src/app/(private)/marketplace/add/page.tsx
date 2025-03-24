import { NewItemForm } from "./NewItemForm";


export default async function NewItemPage() {
  console.log("NewPostPage");

  return (
    <div className="card bg-base-100 w-96 drop-shadow-md">
      <div className="card-body">
        <p>New Post</p>
        <NewItemForm />
      </div>
    </div>
  );
}
