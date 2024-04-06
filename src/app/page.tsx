import React from "react";
import { NavBar } from "./components/Navbar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";

const MainPage = () => {
    const SORT_OPTIONS = [
        { name: 'None', value: 'none' },
        { name: 'Price: Low to High', value: 'price-asc' },
        { name: 'Price: High to Low', value: 'price-desc' },
    ] as const
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>MyCloth store</h1>
            <div className="flex items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                        sort
                        <ChevronDown className='-mr-1 ml-1 h-5 w-5 text-gray-500 flex-shrink-0 group-hover:text-gray-500' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        {SORT_OPTIONS.map((option) => (
                            <button
                                key={option.name}
                                className={cn('text-left w-full block px-4 py-2 text-sm', {
                                    // 'text-gray-900 bg-gray-100': option.value === filter.sort,
                                    // 'text-gray-500': option.value !== filter.sort,
                                })}
                              >
                                {option.name}
                            </button>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

    </main>
  );
};

export default MainPage;
