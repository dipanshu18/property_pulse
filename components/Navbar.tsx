import { User } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import { authOptions } from "@/lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <details className="dropdown">
          <summary
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/properties"}>Properties</Link>
            </li>
            {session && (
              <li>
                <Link href={"/properties/add"}>Add property</Link>
              </li>
            )}
          </ul>
        </details>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Property Pulse
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/properties"}>Properties</Link>
          </li>
          {session && (
            <li>
              <Link href={"/properties/add"}>Add property</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {session ? (
          <>
            <Link href={"/messages"}>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item">
                    2
                  </span>
                </div>
              </button>
            </Link>
            <details className="dropdown dropdown-end">
              <summary
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="rounded-full">
                  <Image
                    alt="User Profile"
                    src={session.user?.image! ?? <User />}
                    width={30}
                    height={30}
                  />
                </div>
              </summary>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href={"/properties/saved"}>Saved properties</Link>
                </li>
                <li>
                  <LogoutBtn />
                </li>
              </ul>
            </details>
          </>
        ) : (
          <Link href={"/api/auth/signin"} className="btn">
            Register/Login
          </Link>
        )}
      </div>
    </div>
  );
}
