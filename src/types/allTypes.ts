export interface UserType {
  id: string;
  email: string;
  name?: string | null; // Optional field
  role?: string | null; // Optional field
  clerkId: string;
  image?: string;
  createdAt: Date;
}

export interface PostType {
  title: string;
  content?: string | null;
  slug: string;
  createdAt: string;
  userId?: string;
  user?: UserType;
  categoryId?: string;
  category?: CategoryType;
}

export interface CategoryType {
  id: string;
  categoryName: string;
  categorySlug: string;
  post?: PostType;
}
