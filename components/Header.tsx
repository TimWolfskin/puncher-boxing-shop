import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#000] pt-5 pb-5">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <h1 className="font-logo text-5xl font-bold text-[#ee0000]">
            punchR
          </h1>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">About</a>
        <a className="headerLink">Delivery</a>
        <a className="headerLink">Payment</a>
        <a className="headerLink">Feedback</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchOutlinedIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-[#ee0000] text-[10px] text-[#FCFCFC]">
                {items.length}
              </span>
            )}
            <LocalMallOutlinedIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <AccountCircleOutlinedIcon
            className="headerIcon"
            onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
