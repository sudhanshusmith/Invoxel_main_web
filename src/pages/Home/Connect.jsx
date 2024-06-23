import React, { useEffect, useState } from "react";

function Connect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on viewport width
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    // Initial call to set state based on viewport width
    handleResize();

    // Event listener to update state on viewport width change
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center my-16 px-6 bg-gradient-to-b from-[#276DFF] to-[#060434] py-10 text-white">
      <p className="uppercase text-2xl lg:text-3xl mb-3 font-light text-center">
        Looking for even more immersion?
      </p>
      <p className="text-sm text-center roboto">
        Find out more how Virtual Reality and Metaverse technologies can help
        you
      </p>
      <p className="text-sm text-center roboto">
        transport your visitors into new realities for experiences they will not
        forget.
      </p>
      <a className="bg-[#276DFF] text-white px-8 py-3 mt-4 font-light rounded-lg" href="https://forms.gle/gSfDeeyYmhhbiK9R9" target="_blank">
        CONNECT
      </a>
    </div>
  );
}

export default Connect;
