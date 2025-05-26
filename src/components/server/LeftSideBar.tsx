import { createUser } from "@/actions/admin/user";
import MySelf from "../MySelf";

export default async function LeftSideBar() {
  const user = await createUser();

  return <h1 className=" absolute top-0">{user?.email}</h1>;
}
