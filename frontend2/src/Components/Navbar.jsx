import * as React from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium text-blue-gray-900">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Pages
        </a>
      </li>
      <li className="p-1 font-medium text-blue-gray-900">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Account
        </a>
      </li>
      <li className="p-1 font-medium text-blue-gray-900">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blocks
        </a>
      </li>
      <li className="p-1 font-medium text-blue-gray-900">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Docs
        </a>
      </li>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="mx-auto max-w-screen-xl px-3 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-lg font-semibold"
        >
          Portfolio
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          className="ml-auto h-6 w-6 text-inherit lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <span className="text-2xl">X</span> // Use text or another icon here
          ) : (
            <span className="text-2xl">☰</span> // Use text or another icon here
          )}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden">
          <NavList />
        </div>
      )}
    </nav>
  );
}
