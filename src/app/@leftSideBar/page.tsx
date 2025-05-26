import { createUser } from "@/actions/admin/user";
import MySelf from "@/components/MySelf";

export default async function LeftSideBar() {
  const user = await createUser();
  console.log("User data:", user);
  return <>{user ? <MySelf user={user} /> : <MySelf />}</>;
}
