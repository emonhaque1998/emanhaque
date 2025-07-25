"use client";

export default function EditDelete({
  catSlug,
  id,
  deleteAction,
}: {
  catSlug: string;
  id: string;
  deleteAction: (catSlug: string, id: string) => void;
}) {
  return (
    <>
      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Edit
      </button>
      <button
        onClick={() => deleteAction(catSlug, id)}
        className="font-medium text-red-500 dark:text-red-500 hover:underline"
      >
        Delete
      </button>
    </>
  );
}
