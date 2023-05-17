import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../../utils/queries";
import AuthService from "../../../utils/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { loading, data } = useQuery(GET_ME);
  const user = data?.me || {};
  const [logoutLoading, setLogoutLoading] = useState(false); // Add logoutLoading state
  // need to log the token here
  console.log("token:", AuthService.getToken());
  console.log("user:", user);

  // auth check
  if (!AuthService.loggedIn()) {
    return null;
  }

  // if there's no user data, return null
  if (!user) {
    return null;
  }

  // if data isn't here yet, say so
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    setLogoutLoading(true); // Set logoutLoading to true

    // Call the logout method from AuthService
    AuthService.logout();

    // After logging out, you can redirect the user or perform any other necessary actions
    // For example, you can redirect the user to the login page
    window.location.assign("/login");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-md bg-white px-3 py-2 px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 hover:bg-gray-200">
          {user.email || "Profile"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {user && (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-3">
              <p className="text-sm">Signed in as</p>
              <p className="truncate text-sm font-medium text-gray-900">
                {user.email}
              </p>
            </div>
            <div className="py-1">
              <Menu.Item>
                <p>Credits: {/* add credit count here */}</p>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://billing.stripe.com/p/login/5kA03U9jh2iCh0c144"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Billing
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button" // Change the button type to "button"
                      onClick={handleLogout} // Call the handleLogout function on click
                      disabled={logoutLoading} // Disable the button while logging out
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      {logoutLoading ? "Logging out..." : "Sign out"}{" "}
                      {/* Display appropriate text based on the logoutLoading state */}
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}
