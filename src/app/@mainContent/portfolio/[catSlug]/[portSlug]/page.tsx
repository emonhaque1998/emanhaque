"use client";
import { use } from "react";

export default function ({
  params,
}: {
  params: Promise<{ portSlug: string }>;
}) {
  const { portSlug } = use(params);
  console.log(portSlug);

  return <h1>{portSlug}</h1>;
}
