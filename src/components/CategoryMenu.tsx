"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}

interface CategoryMenuProps {
  categories: Category[];
  isVisible: boolean;
}

const CategoryMenu = ({ categories, isVisible }: CategoryMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<Category | null>(
    null
  );

  return (
    <div
      className={`absolute top-full left-0 w-[300px] bg-white shadow-lg z-50 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex">
        <div className="w-[300px] h-[600px] overflow-y-auto border-r">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => {
                setActiveCategory(category);
                setActiveSubCategory(null);
              }}
            >
              <Link
                href={category.link}
                className={`flex items-center justify-between px-6 py-3 hover:bg-gray-50 ${
                  activeCategory?.id === category.id
                    ? "bg-gray-50 text-[#F97316]"
                    : ""
                }`}
              >
                <span className="text-sm">{category.title}</span>
                {category.childrens && category.childrens.length > 0 && (
                  <Image
                    src="/images/Arrow.png"
                    alt="arrow"
                    height={20}
                    width={20}
                    className="object-contain"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {activeCategory?.childrens && activeCategory.childrens.length > 0 && (
          <div className="absolute left-[300px] top-0 w-[280px] h-[600px] overflow-y-auto border-r bg-white">
            {activeCategory.childrens.map((subCategory) => (
              <div
                key={subCategory.id}
                className="relative"
                onMouseEnter={() => setActiveSubCategory(subCategory)}
              >
                <Link
                  href={subCategory.link}
                  className={`flex items-center justify-between px-6 py-3 hover:bg-gray-50 ${
                    activeSubCategory?.id === subCategory.id
                      ? "bg-gray-50 text-[#F97316]"
                      : ""
                  }`}
                >
                  <span className="text-sm">{subCategory.title}</span>
                  {subCategory.childrens &&
                    subCategory.childrens.length > 0 && (
                      <Image
                        src="/images/Arrow.png"
                        alt="arrow"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                    )}
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeSubCategory?.childrens &&
          activeSubCategory.childrens.length > 0 && (
            <div className="absolute left-[560px] top-0 w-[280px] h-[480px] overflow-y-auto bg-white">
              {activeSubCategory.childrens.map((subSubCategory) => (
                <Link
                  key={subSubCategory.id}
                  href={subSubCategory.link}
                  className="flex items-center px-6 py-3 hover:bg-gray-50 hover:text-[#F97316]"
                >
                  <span className="text-sm">{subSubCategory.title}</span>
                </Link>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default CategoryMenu;
