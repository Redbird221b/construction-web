import { motion } from 'framer-motion';
import { FaBatteryFull, FaLeaf, FaMoneyBillWave, FaTools } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const icons = [
    <FaBatteryFull className="text-3xl text-green-600 mb-4" />,
    <FaMoneyBillWave className="text-3xl text-green-600 mb-4" />,
    <FaLeaf className="text-3xl text-green-600 mb-4" />,
    <FaTools className="text-3xl text-green-600 mb-4" />,
];

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

export default function WhyChooseUs() {
    const { t } = useTranslation();
    const features = t('whyChooseUs.features', { returnObjects: true });

    return (
        <section className="bg-white py-28 px-6 md:px-16">
            <div className="text-center mb-20">
                <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide rounded-full border border-green-300 shadow-sm">
                    {t('whyChooseUs.badge')}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    {t('whyChooseUs.title')}
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    {t('whyChooseUs.description')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="bg-gray-50 rounded-2xl shadow-md px-8 py-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white"
                    >
                        {icons[i]}
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
