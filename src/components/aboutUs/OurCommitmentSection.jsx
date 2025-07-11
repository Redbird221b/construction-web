import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function OurCommitmentSection() {
    const { t } = useTranslation();

    const features = t('aboutPage.commitment.features', { returnObjects: true });

    return (
        <section className="py-16 bg-white px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Изображение */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://img.freepik.com/free-photo/men-working-battery-cell-repair_23-2149368926.jpg"
                        alt="Battery Repair"
                        className="rounded-lg shadow-md"
                    />
                </motion.div>

                {/* Текстовая часть */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="text-green-700 font-medium text-sm uppercase tracking-widest block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {t('aboutPage.commitment.badge')}
                    </motion.span>

                    <motion.h3
                        className="text-3xl font-bold mt-2 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t('aboutPage.commitment.title')}
                    </motion.h3>

                    <motion.p
                        className="text-gray-700 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {t('aboutPage.commitment.description')}
                    </motion.p>

                    {/* Фичи */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-green-600 text-3xl mb-2">✔</div>
                                <p className="text-gray-800 font-semibold">{feature.title}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Кнопка */}
                    <motion.a
                        href="#contact"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow-md hover:bg-green-700 transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {t('aboutPage.commitment.button')}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
