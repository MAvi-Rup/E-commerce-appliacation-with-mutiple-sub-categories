import Image from "next/image";
import Link from "next/link";

const TopPart = () => {
  return (
    <div className="w-full bg-[#F0F1F1]">
      <div className="container mx-auto py-3 px-2 lg:px-0">
        <div className="flex justify-between items-center font-inter text-xs ">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-[#F97316] cursor-pointer">
              <span>English</span>
              <Image
                src="/images/Dropdown.png"
                height={16}
                width={16}
                alt="img"
                className="ml-1"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/help-center"
                className="hover:text-[#F97316] transition-colors"
              >
                Help Center
              </Link>
              <span>Helpline: 0964781656</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/seller"
              className="hover:text-[#F97316] transition-colors"
            >
              Become a Seller
            </Link>
            <Link
              href="/track-order"
              className="hover:text-[#F97316] transition-colors"
            >
              Order Track
            </Link>
            <Link
              href="/login"
              className="text-[#F97316] hover:text-[#E86305] transition-colors"
            >
              Sign up / Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
