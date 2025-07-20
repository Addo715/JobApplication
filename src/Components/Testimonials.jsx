import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { CiCalendar, CiClock1 } from "react-icons/ci";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      description:
        "We've tried multiple hiring platforms, but nothing compares to the precision and simplicity of HireEdge.",
      name: "Harold Asare",
      job: "Senior Software Engineer at Google",
    },
    {
      description:
        "What impressed me most was the seamless collaboration between hiring managers and recruiters. HireEdge makes teamwork effortless.",
      name: "Addo Emmanuel",
      job: "Senior Software Engineer at Microsoft",
    },
    {
      description:
        "We've tried multiple hiring platforms, but nothing compares to the precision and simplicity of HireEdge.",
      name: "Obed Tawiah",
      job: "MI/AI Engineer at Tesla",
    },
    {
      description:
        "Thanks to Job Bridge, we've doubled our hiring efficiency without expanding the team. It's like having an extra recruiter on staff.",
      name: "Joshua Doe",
      job: "Product Manager at Amazon",
    },
    {
      description:
        "What impressed me most was the seamless collaboration between hiring managers and recruiters. Job Bridge makes teamwork effortless.",
      name: "Foster Frimpong",
      job: "Head of Operations at Tesla",
    },
    {
      description:
        "We've tried multiple hiring platforms, but nothing compares to the precision and simplicity of HireEdge.",
      name: "Bismark Praise",
      job: "Human Resource at Disney",
    },
    {
      description:
        "The analytics dashboard gave us deep insights into bottlenecks we didn't even know existed. Huge value!",
      name: "Addo Samuel",
      job: "Product Manager at Amazon",
    },
  ];

  // 🐌 Slow auto-scroll on mount
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 0.3; // Super slow scroll speed
    let intervalId;

    const scrollStep = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      // Reset when end is reached
    //   if (
    //     scrollContainer.scrollLeft >=
    //     scrollContainer.scrollWidth - scrollContainer.clientWidth
    //   ) {
    //     scrollContainer.scrollLeft = 0;
    //   }
    };

    // intervalId = setInterval(scrollStep, 30); // 30ms = smooth slow scroll

    // const handleMouseEnter = () => clearInterval(intervalId);
    // const handleMouseLeave = () => {
    //   intervalId = setInterval(scrollStep, 30);
    // };

    // scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    // scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    // return () => {
    //   clearInterval(intervalId);
    //   scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
    //   scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    // };
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center p-5">
        <h1 className="text-blue-600 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
          Customer Testimonials
        </h1>
        <p className="text-gray-600 text-center max-w-md mx-auto mt-2">
          Real success stories from companies <br />
          and job seekers who trust us for smarter hiring.
        </p>
      </div>

      {/* Auto-Scrolling Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 pb-6 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="w-5 h-5 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-800 text-base leading-relaxed mb-6 min-h-[120px]">
              "{testimonial.description}"
            </p>

            {/* Author */}
            <div className="border-t pt-4">
              <h4 className="font-semibold text-blue-500 text-lg">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 text-sm mt-1">{testimonial.job}</p>
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default Testimonials;
