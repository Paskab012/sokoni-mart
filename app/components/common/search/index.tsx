"use client";
import { useState } from "react";
import Search from "./Search";

export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className='w-full'>
      <Search onSearch={handleSearch} />
    </div>
  );
}
