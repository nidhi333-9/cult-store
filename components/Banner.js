import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full  h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showArrows
        interval={5000}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="banner1"
          />
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="banner1"
          />
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="banner1"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
