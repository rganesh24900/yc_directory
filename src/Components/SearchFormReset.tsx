'use client';

import { XIcon } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset =()=>{
    const input = document.querySelector(".search-form") as HTMLFormElement;
    if(input) input.reset();
  }
  return (
    <button type="reset" onClick={reset}>
        <Link href="/" className="search-btn text-white"><XIcon className="size-5"/></Link>
    </button>
  )
}

export default SearchFormReset