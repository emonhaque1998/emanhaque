import { getUser } from "@/actions/admin/user";

export default async function Home() {
  const user = await getUser();

  return <h1>{user.message}</h1>; // or <div>Loading...</div>
}
