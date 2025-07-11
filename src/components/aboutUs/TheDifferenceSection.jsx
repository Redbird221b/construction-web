import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function TheDifferenceSection() {
    const { t } = useTranslation();
    const diff = t('aboutPage.difference', { returnObjects: true });

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const barVariants = {
        hidden: { width: 0 },
        visible: (custom) => ({
            width: `${custom}%`,
            transition: { duration: 1.4, ease: 'easeOut' }
        })
    };

    return (
        <section className="py-20 bg-white px-4" ref={ref}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Левая колонка */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="text-green-700 font-medium text-sm uppercase tracking-widest"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {diff.badge}
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {diff.title}
                    </motion.h2>

                    <motion.p
                        className="text-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {diff.description}
                    </motion.p>

                    {/* Прогресс-бары */}
                    <div className="space-y-6 mt-6">
                        {diff.bars.map((bar, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-sm font-semibold text-gray-800">
                                    <span>{bar.label}</span>
                                    <span>{bar.value}%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-green-600 rounded-full"
                                        custom={bar.value}
                                        variants={barVariants}
                                        initial="hidden"
                                        animate={controls}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Правая колонка — Картинка */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://img.freepik.com/free-photo/high-angle-worker-cleaning-battery_23-2149368923.jpg"
                        alt="Battery Cleaning Process"
                        className="rounded-lg shadow-lg w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
