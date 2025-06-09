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
  image: string;
  slug: string;
  createdAt: string;
  userId: string;
  user: UserType;
  categoryId: string;
  category: CategoryType;
}

export interface CategoryType {
  id: string;
  categoryName: string;
  categorySlug: string;
  post: PostType;
}

export interface PortfolioType {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  status: string;
  clientName: string;
  location: string;
  userId: string;
  categoryId: string;
  category: CategoryType;
  user: UserType;
  createdAt: Date;
}
