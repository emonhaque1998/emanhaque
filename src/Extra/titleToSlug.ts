export const titleToSlug = (name: string) => {
  const categorySlug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with a single one

  return categorySlug;
};
