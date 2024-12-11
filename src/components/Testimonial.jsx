import { testimonailData } from "../data/testimonialData";

function Testimonial() {
  return (
    <>
      <section className="my-8 " id="/testimonials">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-5xl font-semibold leading-none text-center">
            Testimonials
          </h1>
          <p className="text-2xl">
            {" "}
            Here are some testimonials from our clients
          </p>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {testimonailData.map((testimonial) => (
            <div
              className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
              key={testimonial.id}
            >
              <img
                src={testimonial.image}
                alt=""
                className="w-24 h-24 mx-auto bg-center bg-cover rounded-full bg-gray-500"
              />
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 tex-gray-500"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {testimonial.testimonial}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-gray-500"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-500 dark:text-gray-50">
                <p className="text-xl font-semibold leading-tight">
                  {testimonial.name}
                </p>
                <p className="text-sm uppercase">
                  {testimonial.testimonial_position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonial;
