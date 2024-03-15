export default function Skills() {
  return (
    <section id="skills" className="bg-secondaryColor pb-32 pt-36 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primaryColor">
              A number of
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl dark:text-secondaryColor">
              My Skills
            </h2>
            <p className="text-md font-medium text-thirdColor md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing voluptates?
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href=""
              className="mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/img/logo-img/HTML.svg" alt="HTML" />
            </a>
            <a
              href=""
              className="mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/img/logo-img/CSS.svg" alt="CSS" />
            </a>
            <a
              href=""
              className="mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/img/logo-img/HTML.svg" alt="HTML" />
            </a>
            <a
              href=""
              className="mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/img/logo-img/CSS.svg" alt="CSS" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
