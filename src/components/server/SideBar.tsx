import { createUser } from "../../app/actions/user";

export default async function SideBar() {
  const user = await createUser();

  return <h1 className="text-lg font-bold">{user && user?.name}</h1>;
}
