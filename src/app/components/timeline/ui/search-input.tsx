"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState(defaultValue ?? "");

  const handleSearchEnter = () => {
    // if (searchInput) {
    //   router.push("/search?q=" + encodeURIComponent(searchInput));
    //   setSearchInput('');
    // }
  };

  // if (hideOnSearch && pathname === "/search") return null;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      border
      value={searchInput}
      onChange={t => setSearchInput(t)}
      onEnter={handleSearchEnter}
    />
  );
};
