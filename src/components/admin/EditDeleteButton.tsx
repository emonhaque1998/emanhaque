"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addAllCategory } from "@/store/categorySlice";

export default function EditDeleteButton({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const getAllCategory = async () => {
    const res = await axios.get(`/api/post/category?take=10`);

    if (res.status === 200) {
      dispatch(addAllCategory(res.data.allCategory));
    }
  };

  const deleteHandler = async () => {
    const res = await axios.delete(`/api/post/category/${id}`);
    res.data.success
      ? toast.success(res.data.msg) && getAllCategory()
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
