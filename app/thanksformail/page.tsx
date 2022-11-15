import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-12">
      <div className="h-[10vh]"></div>
      <h1 className="font-serif text-3xl p-8 md:text-4xl">Thank you for getting in touch with me :)</h1>
      <Link
        href={"/"}
        className="w-40 text-center text-xl border border-primary bg-primary p-4 text-primtext transition duration-300 ease-in-out hover:bg-primtext hover:text-primary"
      >
        Back
      </Link>
    </div>
  );
}

export default Page;
