// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
  // return (
    // <div className="min-h-screen bg-red-300 flex items-center justify-center text-white text-2xl">
    //   Tailwind CSS が効いていれば赤背景になります
    // </div>
  // );
}
