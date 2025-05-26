import { createUser } from "@/actions/admin/user";

export default async function SideBar() {
  const user = await createUser();

  return <h1 className="text-lg font-bold">{user ? user?.name : "Eman H."}</h1>;
}
