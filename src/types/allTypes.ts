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
  content?: string;
  slug: string;
  createdAt: string;
  userId: string;
  user: UserType;
}
