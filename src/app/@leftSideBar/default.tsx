import { createUser } from "@/actions/admin/user";
import MySelf from "@/components/MySelf";

export default async function Default() {
  const user = await createUser();

  return <>{user ? <MySelf user={user} /> : <MySelf />}</>;
}
