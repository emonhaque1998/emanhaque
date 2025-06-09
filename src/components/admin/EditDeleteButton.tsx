"use client";
import axios from "axios";
import toast from "react-hot-toast";

export default function EditDeleteButton({
  id,
  sendData,
  path,
}: {
  id: string;
  sendData: any;
  path: string;
}) {
  const getAll = async () => {
    const res = await axios.get(`/api/${path}?take=10`);

    if (res.status === 200) {
      sendData(res.data);
    }
  };

  const deleteHandler = async () => {
    const res = await axios.delete(`/api/${path}/${id}`);
    res.data.success
      ? toast.success(res.data.msg) && getAll()
      : toast.error("Something wrong!");
  };

  return (
    <>
      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Edit
      </button>
      <button
        onClick={deleteHandler}
        className="font-medium text-red-500 dark:text-red-500 hover:underline"
      >
        Delete
      </button>
    </>
  );
}
