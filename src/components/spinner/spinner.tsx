"use client"
import { useSelector } from "react-redux";
import RoundSpinner from "./roundSpinner";
import { RootState } from "@/providers/redux/store";

function Spinner() {
  const isShow = useSelector((state: RootState) => state.loader.isShow);
  return isShow ? (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <RoundSpinner />
    </div>

  ) : null;
}

export default Spinner;
