import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
    const { t } = useTranslation();
    const testimonials = t("testimonials.list", { returnObjects: true });

    return (
        <section
            className="relative bg-fixed bg-center bg-cover py-36"
            style={{
                backgroundImage: "url('https://www.bsf-usa.com/wp-content/uploads/2024/01/hero-bg-1.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl mx-auto text-center px-6"
            >
                <h2 className="text-4xl font-bold text-white mb-12">
                    {t("testimonials.title")}
                </h2>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                    className="pb-16"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-60 bg-white/20 border mb-11 border-white/30 rounded-3xl backdrop-blur-xl shadow-lg p-8 flex flex-col justify-between text-left">
                                <p className="text-white text-lg font-light mb-4">{t.text}</p>
                                <p className="text-white font-semibold">— {t.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom styles for pagination */}
                <style>{`
          .swiper-pagination-bullets {
            bottom: 0px !important;
          }

          .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
          }

          .swiper-pagination-bullet-active {
            background: #ffffff;
            opacity: 1;
          }
        `}</style>
            </motion.div>
        </section>
    );
}
