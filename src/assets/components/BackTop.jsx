import React, { useEffect } from "react";

export default function BackTop() {
  useEffect(() => {
    // Navbar Fixed
    const handleScroll = () => {
      const header = document.querySelector("header");
      const backTop = document.querySelector("#back-top");
      const fixednav = header.offsetTop;
      if (window.pageYOffset > fixednav) {
        header.classList.add("navbar-fixed");
        backTop.classList.remove("hidden");
        backTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        backTop.classList.remove("flex");
        backTop.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup untuk menghapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primaryColor p-4 hover:animate-pulse"
      id="back-top"
    >
      <span className="mt-2 block h-5 w-5 rotate-45 border-l-2 border-t-2"></span>
    </a>
  );
}
