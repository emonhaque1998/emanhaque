import { createUser } from "@/actions/admin/user";
import MySelf from "../MySelf";

export default async function LeftSideBar() {
  const user = await createUser();

  return <>{user && <MySelf userInfo={user} />}</>;
}
