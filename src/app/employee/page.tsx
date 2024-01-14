"use client";
import RoundSpinner from "@/components/spinner/roundSpinner";
import { EMPLOYEE_LIST } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Employee() {
  const router = useRouter();

  useEffect(() => {
    const redirectPage = () => {
      router.replace(EMPLOYEE_LIST);
    }
    redirectPage()
  })

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <RoundSpinner />
    </div>
  )
}
