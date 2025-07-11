import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

export default function ParallaxExperience() {
    const { t } = useTranslation();
    const exp = t('aboutPage.experienceBanner', { returnObjects: true });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            ref={ref}
            className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center px-4"
            style={{
                backgroundImage: "url('https://www.bsf-usa.com/wp-content/uploads/2024/02/bsf-miami03.jpg')"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center text-white max-w-3xl px-6 py-10 rounded-xl bg-white/10 backdrop-blur-sm shadow-xl"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="mb-2 text-green-300 text-sm font-semibold uppercase tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {exp.badge}
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {exp.title}
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-100 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    {exp.subtitle}
                </motion.p>

                <motion.p
                    className="text-base text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    {exp.description}
                </motion.p>

                <motion.a
                    href="#quote"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                >
                    {exp.button}
                </motion.a>
            </motion.div>
        </section>
    );
}
