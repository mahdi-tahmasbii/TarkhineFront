import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { motion, transform } from "framer-motion";
import Auth from "./Auth";

const UserDropDown = () => {
  return (
    <Menu>
      <MenuHandler>
        <motion.div
          whileHover={{
            // scale: 1.1,
            transition: { duration: 0.5 },
            animationDelay: 2,
          }}
          className="bg-[#E5F2E9] p-2 rounded-md flex group cursor-pointer"
        >
          <Image
            src={"/icons/IconSax/outline/user.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: ["0", "1"] }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer hidden group-hover:block transition-all duration-500 ease-in-out"
          >
            <Image
              src={"/icons/IconSax/outline/arrow-down-1.svg"}
              alt="search"
              width={24}
              height={24}
            />
          </motion.div>
        </motion.div>
      </MenuHandler>
      <MenuList>
        <Auth />
        <MenuItem className="flex items-center gap-2"></MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Image
            src={"/icons/IconSax/outline/user-normal.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Link href={"/profile"}>
            <Typography variant="small" className="font-medium">
              پروفایل
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Image
            src={"/icons/IconSax/outline/wallet-2.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Link href={"/order"}>
            <Typography variant="small" className="font-medium">
              پیگیری سفارش
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Image
            src={"/icons/IconSax/outline/Heart.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Link href={"/favoriets"}>
            <Typography variant="small" className="font-medium">
              علاقه مندی
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Image
            src={"/icons/IconSax/outline/location.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Link href={"/my-addresses"}>
            <Typography variant="small" className="font-medium">
              آدرس‌های من
            </Typography>
          </Link>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <Image
            src={"/icons/IconSax/outline/logout.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Link href={"/logout"}>
            <Typography variant="small" className="font-medium">
              خروج از حساب
            </Typography>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserDropDown;
