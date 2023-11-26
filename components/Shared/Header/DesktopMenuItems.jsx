import React from "react";
import { branches, menu, pathname } from "@/constants";
import DropDownMenu from "./DropDownMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate, motion } from "framer-motion";

const DesktopMenuItems = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex gap-6">
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            className={`link ${
              pathname === "/"
                ? "text-[#417F56] underline underline-offset-8 font-bold"
                : "font-medium hover:underline hover:underline-offset-8"
            } active:scale-125`}
            href="/"
          >
            صفحه اصلی
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <DropDownMenu title={"شعبه"} items={branches} />
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <DropDownMenu title={"منو"} items={menu} />
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            className={`link ${
              pathname === "/ss"
                ? "text-[#417F56] underline underline-offset-8 font-bold"
                : "font-medium hover:underline hover:underline-offset-8"
            } active:scale-125`}
            href="/ss"
          >
            اعطای نمایندگی
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            className={`link ${
              pathname === "/about-us"
                ? "text-[#417F56] underline underline-offset-8 font-bold"
                : "font-medium hover:underline hover:underline-offset-8"
            } active:scale-125`}
            href="/about-us"
          >
            درباره ما
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            className={`link ${
              pathname === "/contact-us"
                ? "text-[#417F56] underline underline-offset-8 font-bold"
                : "font-medium hover:underline hover:underline-offset-8"
            } active:scale-125`}
            href="/contact-us"
          >
            تماس با ما
          </Link>
        </motion.li>
      </ul>
    </>
  );
};

export default DesktopMenuItems;
