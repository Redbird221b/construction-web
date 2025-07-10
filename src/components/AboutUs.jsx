import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useTranslation } from 'react-i18next';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: 'easeOut',
        },
    }),
};

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <section id="about" className="bg-gray-100 py-20 px-4 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
                        <span className="text-green-600">{t('about.heading').split(' ')[0]}</span> {t('about.heading').split(' ').slice(1).join(' ')}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-16">
                        {t('about.subtitle')}
                    </p>
                </motion.div>

                {/* Two Columns */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <BeforeAfterSlider
                            before="https://www.bsf-usa.com/wp-content/uploads/2024/01/bsf-battery-before.jpg"
                            after="https://www.bsf-usa.com/wp-content/uploads/2024/01/bsf-recovery-after.jpg"
                            height="400px"
                        />
                        <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
                            {t('about.left.title')}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            {t('about.left.text')}
                        </p>
                    </motion.div>

                    {/* Right column: mission */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        custom={2}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('about.right.title')}</h3>
                        <p className="text-gray-700 mb-6">
                            {t('about.right.text')}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {t('about.right.points', { returnObjects: true }).map((text, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeUp}
                                    custom={3 + i}
                                >
                                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                        ✓
                                    </div>
                                    <span className="text-gray-800">{text}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-[80px] text-center">
                            <div>
                                <p className="text-4xl font-bold text-green-600">{t('about.right.stats.experience.value')}</p>
                                <p className="text-gray-700 text-sm">{t('about.right.stats.experience.label')}</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-green-600">{t('about.right.stats.restored.value')}</p>
                                <p className="text-gray-700 text-sm">{t('about.right.stats.restored.label')}</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-green-600">{t('about.right.stats.waste.value')}</p>
                                <p className="text-gray-700 text-sm">{t('about.right.stats.waste.label')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
