import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import AuthService from "../../../utils/auth";

const navigation = [
  { name: "Cover Letter", href: "/" },
  { name: "Resume", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = AuthService.loggedIn(); // Check if the user is logged in
  console.log('isLoggedIn:', isLoggedIn);

  return (
    <header className="nav">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">cvgen.ai</span>
            <img className="h-8 w-auto" src="icon goes here" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-wh-900 text-lg font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
          <span id="soonBadge">Coming soon!</span>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {isLoggedIn ? (
            <Dropdown /> // Show the dropdown when logged in
          ) : (
            <Link
              to="/login"
              className="text-white-900 -mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 underline"
            >
              Log in
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/pricing"
              className="rounded-md bg-white px-3 py-2 px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 hover:bg-gray-200"
            >
              Support Us
            </Link>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* ... */}
      </Dialog>
    </header>
  );
}
