import { Interface } from "readline";

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
  post?: PostType[];
  user?: UserType;
  portfolio?: PortfolioType[];
  service?: ServiceType;
}

export interface CategoryTypeAndPortFolio {
  id: string;
  categoryName: string;
  categorySlug: string;
  post?: PostType;
  user?: UserType;
  portfolio?: PortfolioType[];
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

export interface ContactType {
  id: string;
  name: string;
  email: string;
  subject: string;
  message?: string;
  userId: string;
  user: UserType;
  createdAt: Date;
}

export interface ServiceType {
  id: string;
  image: string;
  shortDescription: string;
  category?: CategoryType;
  createdAt: Date;
}

export interface Meta {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
}
