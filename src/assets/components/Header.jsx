import React, { useState, useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Navbar Fixed
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixednav = header.offsetTop;
      if (window.pageYOffset > fixednav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup untuk menghapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Perhatikan bahwa kita memberikan array kosong sebagai argumen kedua untuk useEffect, sehingga ini hanya akan dijalankan sekali saat komponen dipasang

  useEffect(() => {
    // Hamburger
      const handleHamburgerClick = () => {
      const hamburger = document.querySelector("#hamburger");
      const navMenu = document.querySelector("#nav-menu");
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    const hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click", handleHamburgerClick);

    // Cleanup untuk menghapus event listener saat komponen tidak lagi digunakan
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []); // Juga gunakan array kosong agar efek ini hanya dijalankan sekali saat komponen dipasang


  // State untuk mengontrol mode gelap
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek samping untuk menambahkan atau menghapus kelas 'dark' pada elemen html
  useEffect(() => {
    const html = document.querySelector('html');
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    // Simpan status tema ke localStorage saat isDarkMode berubah
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Fungsi untuk menangani klik tombol mode gelap
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Periksa apakah tema gelap disimpan di localStorage atau apakah preferensi tema gelap disetel di browser
    if (
      localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4 py-4">
            <a href="" className="py-6 text-lg font-bold text-primaryColor">
              Notaf
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-4 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:bg-secondaryColor dark:shadow-slate-600 lg:dark:bg-transparent"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base text-secondaryColor group-hover:text-primaryColor dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="mx-8 flex py-2 text-base text-secondaryColor group-hover:text-primaryColor dark:text-white"
                  >
                    About Me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="mx-8 flex py-2 text-base text-secondaryColor group-hover:text-primaryColor dark:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#skills"
                    className="mx-8 flex py-2 text-base text-secondaryColor group-hover:text-primaryColor dark:text-white"
                  >
                    Skills
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="mx-8 flex py-2 text-base text-secondaryColor group-hover:text-primaryColor dark:text-white"
                  >
                    Contact Me
                  </a>
                </li>
                <li className="flex items-center pl-8">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input type="checkbox" className="hidden" id="dark-toggle" checked={isDarkMode}
                    onChange={handleDarkModeToggle}/>
                    <label for="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
