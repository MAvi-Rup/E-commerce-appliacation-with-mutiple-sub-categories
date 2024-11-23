"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryMenu from "./CategoryMenu";

interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}

const MainNav = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full bg-white relative">
      <div className="container mx-auto py-4 px-2 lg:px-0">
        <div className="flex justify-between items-center gap-4">
          <div
            className="w-[120px] relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Alzaf Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <CategoryMenu categories={categories} isVisible={showCategories} />
          </div>

          <div className="flex-1 max-w-[800px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full h-[44px] pl-4 pr-[100px] rounded-lg border border-[#dddddd] text-sm bg-[#F5F5F5]"
              />
              <button className="absolute right-0 top-0 h-full px-6 bg-[#F97316] rounded-lg flex items-center justify-center gap-2">
                <Image
                  src="/images/search.png"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/profile" className="p-3 bg-[#F5F5F5] rounded-lg">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>

            <Link href="/wishlist" className="p-3 bg-[#F5F5F5] rounded-lg">
              <Image
                src="/images/love.png"
                alt="Wishlist"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>

            <Link href="/cart" className="p-3 bg-[#F5F5F5] rounded-lg">
              <Image
                src="/images/cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>

            <Link href="/cloud-service">
              <Image
                src="/images/cloud.png"
                alt="Cloud Service"
                width={150}
                height={80}
                className="object-contain h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
