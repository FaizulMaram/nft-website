import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// Auto Scroll
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
const Slider = () => {
  return (
    <div className="slider-wrapper bg-[#21e787]">
      <div className="slider font-extrabold text-2xl">
        <Splide
          options={{
            type: "loop",
            perPage: 10,
            focus: "center",
            pagination: false,
            arrows: false,
            drag: "free",
            AutoScroll: {
              speed: 1,
            },
            breakpoints: {
              1600: {
                perPage: 8,
              },
              1300: {
                perPage: 7,
              },
              1100: {
                perPage: 6,
              },
              900: {
                perPage: 4,
              },
              600: {
                perPage: 3,
              },
              500: {
                perPage: 2,
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <h1>NOXSTAR</h1>
          </SplideSlide>
          <SplideSlide>
            <h1>BOXNFT</h1>
          </SplideSlide>
          <SplideSlide>
            <h1>NFTBOX</h1>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
