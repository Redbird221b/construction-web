// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const images = [
    'https://www.batteriesplus.com/490711/globalassets/blog/hero-images/power/are-rechargeable-batteries-eco-friendly.jpg',
    'https://thumbor.thebear.group/unsafe/1110x555/https://directus-deskthebear.s3.ap-southeast-1.amazonaws.com/uploads/ba578c9f-dec6-4f80-8691-b42871ee0f5e.jpeg',
    'https://assets.entrepreneur.com/content/3x2/2000/1748948620-Battery-Freepik.jpg'
];

export default function HeroSlider() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = t('heroSlider.slides', { returnObjects: true });

    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="h-[80vh] w-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="h-full w-full bg-cover bg-center flex items-center justify-center text-white text-center px-4"
                        style={{ backgroundImage: `url(${images[index]})` }}
                    >
                        {index === activeIndex && (
                            <motion.div
                                key={activeIndex}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.4,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="bg-black/60 p-6 rounded-md max-w-3xl"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h1>
                                {slide.subtitle && (
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{slide.subtitle}</h2>
                                )}
                                <p className="mb-6">{slide.description}</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#quote"
                                        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold"
                                    >
                                        {t('heroSlider.ctaPrimary')}
                                    </a>
                                    <a
                                        href="#quote"
                                        className="border border-white px-6 py-2 rounded text-white font-semibold"
                                    >
                                        {t('heroSlider.ctaSecondary')}
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
