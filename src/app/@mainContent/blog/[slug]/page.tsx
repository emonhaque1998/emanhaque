import { use } from "react";

export default function SinglePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
