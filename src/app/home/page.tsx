import React from "react";
import Table from "../../components/Table";

export default function Home() {
  console.log("home component");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        home page...
        <Table />
      </main>
    </>
  );
}
