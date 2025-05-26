import { createUser } from "@/actions/admin/user";
import MySelf from "../MySelf";

export default async function SideBar() {
  const user = await createUser();

  return user && <MySelf userInfo={user} />;
}
