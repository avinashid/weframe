"use client";
import { FaThList } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./Sidebar.scss";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();
  const [expandedSidebar, toggleExpandedSidebar] = useState(false);
  return (
    <div
      className={
        expandedSidebar ? " expandedWrapper sideWrapper " : "sideWrapper"
      }
    >
      <div className="md:fixed">
        <div className="sideToggle flex justify-center">
          <div
            className="sideContentView"
            onClick={() => toggleExpandedSidebar((e) => !e)}
          >
            <FaThList />
          </div>
        </div>
        <div className="sideContent ">
          <Link
            href={"/"}
            className={
              path === "/"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover" + "hide"
            }
          >
            <Image alt="home" width={24} height={24} src={"/svg/Home.svg"} />
            <div className="sideText">Dashboard</div>
          </Link>
          <Link
            href={"/content"}
            className={
              path === "/content"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover"
            }
          >
            <Image
              alt="books"
              width={24}
              height={24}
              className="text-black"
              src={"/svg/Document.svg"}
            />

            <div className="sideText">Content</div>
          </Link>
          <Link
            href={"/team"}
            className={
              path === "/team"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover"
            }
          >
            <Image
              alt="profile"
              width={24}
              height={24}
              src={"/svg/Profile2.svg"}
            />
            <div className="sideText">Team</div>
          </Link>
          <Link
            href={"/user"}
            className={
              path === "/user"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover"
            }
          >
            <Image alt="user" width={24} height={24} src={"/svg/Profile.svg"} />

            <div className="sideText">User</div>
          </Link>
          <Link
            href="/app"
            className={
              path === "/app"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover" + " hide"
            }
          >
            <Image alt="appweb" width={24} height={24} src={"/svg/Web.svg"} />
            <div className="sideText">App/Web</div>
          </Link>
          <Link
            href={"/analytics"}
            className={
              path === "/analytics"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover" + " hide"
            }
          >
            <Image
              alt="analytics"
              width={24}
              height={24}
              src={"/svg/Analytics.svg"}
            />
            <div className="sideText">Analytics</div>
          </Link>
          <Link
            href={"/media"}
            className={
              path === "/media"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover" + " hide"
            }
          >
            <Image alt="video" width={24} height={24} src={"/svg/Video.svg"} />
            <div className="sideText">Media</div>
          </Link>
          <Link
            href={"/notification"}
            className={
              path === "/notification"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover" + " hide"
            }
          >
            <Image
              alt="notification"
              width={24}
              height={24}
              src={"/svg/Notification.svg"}
            />
            <div className="sideText">Notificatoin</div>
          </Link>
          <Link
            href={"/setting"}
            className={
              path === "setting"
                ? "sideContentView sideBtnColor"
                : "sideContentView sideContentHover" + " hide"
            }
          >
            <Image
              alt="settings"
              width={24}
              height={24}
              src={"/svg/Setting.svg"}
            />
            <div className="sideText">Setting</div>
          </Link>
        </div>
        <div className="sideSignin">
          <div
            className={`flex hide gap-2 items-center bg-blue-100  ${
              expandedSidebar ? "flex-row" : "flex-col"
            }  rounded-md shadow-sm py-1 px-3`}
          >
            <Image
              alt="headphone"
              width={24}
              height={24}
              src={"/svg/Headphones.svg"}
            />
            <div className="sideText text-center">Contact Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
