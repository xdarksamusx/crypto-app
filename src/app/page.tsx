"use client";
import React from "react";

import StoreProvider from "./StoreProvider";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addTodo } from "@/lib/features/todo";
import Image from "next/image";

export default function Home() {
  return (
    <StoreProvider>
      <div>Home...</div>
    </StoreProvider>
  );
}
