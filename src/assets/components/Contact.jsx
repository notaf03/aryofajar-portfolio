export default function Contact() {
  return (
    <section id="contact" className="pb-32 pt-36 dark:bg-slate-800">
      <div className="containe">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primaryColor">
              Contact
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-secondaryColor sm:text-4xl lg:text-5xl dark:text-white">
              Contact Me
            </h2>
            <p className="text-md font-medium text-thirdColor md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing voluptates?
            </p>
          </div>
        </div>

        <form>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label
                for="name"
                className="text-base font-bold text-primaryColor"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md bg-slate-200 p-3 text-secondaryColor focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                for="email"
                className="text-base font-bold text-primaryColor"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full rounded-md bg-slate-200 p-3 text-secondaryColor focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                for="message"
                className="text-base font-bold text-primaryColor"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                className="h-32 w-full rounded-md bg-slate-200 p-3 text-secondaryColor focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="w-full rounded-full bg-primaryColor px-8 py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
