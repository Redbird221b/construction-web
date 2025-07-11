import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function BsfIntroSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-gray-100 py-16 text-center px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                    {t('aboutPage.bsfIntro.badge')}
                </motion.span>

                <motion.h2
                    className="text-3xl md:text-4xl font-bold mt-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t('aboutPage.bsfIntro.title')}
                </motion.h2>

                <motion.p
                    className="text-gray-700 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {t('aboutPage.bsfIntro.description')}
                </motion.p>

                <motion.a
                    href="#contact"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow-md hover:bg-green-700 transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {t('aboutPage.bsfIntro.button')}
                </motion.a>
            </motion.div>
        </section>
    );
}
