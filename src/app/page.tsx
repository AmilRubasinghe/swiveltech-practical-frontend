"use client";
import RoundSpinner from "@/components/spinner/roundSpinner";
import { EMPLOYEE_LIST } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectPage = () => {
      router.push(EMPLOYEE_LIST);
    }
    redirectPage()
  })

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <RoundSpinner />
      <h1>Welcome Employee Manager</h1>
    </main>
  )
}
