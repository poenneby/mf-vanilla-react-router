import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { lazy, Suspense } from "react";
// @ts-ignore
const RemoteGreeting = lazy(async () => import("remote/greeting"));

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteGreeting />
      </Suspense>
    </>
  );
}
