export default function SinglePost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
