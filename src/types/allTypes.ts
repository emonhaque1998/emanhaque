export interface UserType {
  id: string;
  email: string;
  name?: string | null; // Optional field
  role?: string | null; // Optional field
  clerkId: string;
  image?: string;
  createdAt: Date;
}
