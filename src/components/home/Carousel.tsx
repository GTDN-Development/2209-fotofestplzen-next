// import Image from "next/image";
// import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  // {
  //   id: 1,
  //   src: "/images/slides/slide-1.jpg",
  //   alt: "Slide 1",
  //   width: 1920,
  //   height: 1440,
  //   caption: "Lorem ipsum dolor",
  //   className: "aspect-[4/3] !w-auto",
  // },
  {
    id: 8,
    src: "/images/slides/slide-8.jpg",
    alt: "Slide 8",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 2,
    src: "/images/slides/slide-2.jpg",
    alt: "Slide 2",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 3,
    src: "/images/slides/slide-3.jpg",
    alt: "Slide 3",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 4,
    src: "/images/slides/slide-4.jpg",
    alt: "Slide 4",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 5,
    src: "/images/slides/slide-5.jpg",
    alt: "Slide 5",
    width: 1440,
    height: 1920,
    caption: "Lorem ipsum dolor",
    className: "aspect-[3/4] !w-auto",
  },
  {
    id: 6,
    src: "/images/slides/slide-6.jpg",
    alt: "Slide 6",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 7,
    src: "/images/slides/slide-7.jpg",
    alt: "Slide 7",
    width: 1440,
    height: 1920,
    caption: "Lorem ipsum dolor",
    className: "aspect-[3/4] !w-auto",
  },
  {
    id: 9,
    src: "/images/slides/slide-9.jpg",
    alt: "Slide 9",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 10,
    src: "/images/slides/slide-10.jpg",
    alt: "Slide 10",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 11,
    src: "/images/slides/slide-11.jpg",
    alt: "Slide 11",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 12,
    src: "/images/slides/slide-12.jpg",
    alt: "Slide 12",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 13,
    src: "/images/slides/slide-13.jpg",
    alt: "Slide 13",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 14,
    src: "/images/slides/slide-14.jpg",
    alt: "Slide 14",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
  {
    id: 15,
    src: "/images/slides/slide-15.jpg",
    alt: "Slide 15",
    width: 1920,
    height: 1440,
    caption: "Lorem ipsum dolor",
    className: "aspect-[4/3] !w-auto",
  },
];

type Props = {
  className?: string;
};

export default function Carousel({ className = "" }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        draggable={true}
        grabCursor={true}
        modules={[Pagination]}
        className={`swiper-themed h-72 cursor-grab sm:h-[480px] xl:h-[800px] ${className}`}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`flex h-72 flex-col items-start justify-start gap-2 px-4 pb-10 sm:h-96 lg:px-12 xl:h-[640px] ${slide.className}`}
          >
            <div className="h-5/6 w-full overflow-hidden rounded-2xl bg-slate-700">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* <div className="h-1/6">{slide.caption}</div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
