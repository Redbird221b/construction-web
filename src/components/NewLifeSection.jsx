import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: 'easeOut',
        },
    }),
};

export default function NewLifeSection() {
    const { t } = useTranslation();
    const vehicles = t('newLife.vehicles', { returnObjects: true });

    return (
        <section className="relative w-full h-auto overflow-hidden">
            {/* Видео фон */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/162956150.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Контент */}
            <div className="relative z-20 py-28 px-6 md:px-16 text-white text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    {t('newLife.title')}
                </motion.h2>
                <motion.p
                    className="text-lg max-w-2xl mx-auto mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                >
                    {t('newLife.description')}
                </motion.p>

                {/* Карточки */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {vehicles.map((title, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 2}
                            className="bg-black/70 text-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            <img
                                src="https://www.bsf-usa.com/wp-content/uploads/2024/01/BSF-forklift-battery.png"
                                alt={title}
                                className="m-auto h-52 pt-9 object-cover"
                            />
                            <div className="p-6 flex justify-center">
                <span className="px-6 py-2 border border-white text-white text-sm md:text-base font-medium rounded-full hover:bg-white hover:text-gray-800 transition duration-300">
                  {title}
                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
