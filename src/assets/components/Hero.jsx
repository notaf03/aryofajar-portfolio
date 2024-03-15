export default function Hero() {
return (
    <section id="home" className="pt-36 dark:bg-secondaryColor">
    <div className="container">
        <div className="mx-auto flex flex-wrap">
        <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primaryColor md:text-xl">
            Welcome to 👍, My portfolio website{" "}
            <span className="mt-1 block text-4xl font-bold text-secondaryColor lg:text-5xl dark:text-white">
                Aryo Fajar Laksono
            </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-thirdColor lg:text-2xl">
            Front End Developer
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-forthColor">
            I am a web developer with a bachelor's degree in information
            engineering
            </p>

            <a
            href=""
            className="rounded-full bg-primaryColor px-8 py-3
                        text-base font-semibold text-white transition duration-300 ease-in-out
                        hover:opacity-80 hover:shadow-lg"
            >
            Download My CV
            </a>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
            <img
                src="src/assets/img/person.png"
                alt="myFoto"
                className="mx-auto max-w-full"
            />
            </div>
        </div>
        </div>
    </div>
    </section>
);
}
