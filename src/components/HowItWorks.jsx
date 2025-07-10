import { motion } from 'framer-motion';
import { FaSearch, FaTools, FaDollarSign } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.3,
            duration: 0.9,
            ease: 'easeOut',
        },
    }),
};

export default function HowItWorks() {
    const { t } = useTranslation();
    const steps = t('howItWorks.steps', { returnObjects: true });

    const icons = [
        <FaSearch className="text-4xl text-green-600 mb-4" />,
        <FaTools className="text-4xl text-green-600 mb-4" />,
        <FaDollarSign className="text-4xl text-green-600 mb-4" />,
    ];

    return (
        <section id="how-it-works" className="py-28 bg-white px-4 md:px-12 lg:px-20">
            <motion.div
                className="text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide rounded-full border border-green-300 shadow-sm">
                    {t('howItWorks.badge')}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    <span className="text-green-600">{t('howItWorks.heading').split(' ')[0]}</span>{' '}
                    {t('howItWorks.heading').split(' ').slice(1).join(' ')}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {t('howItWorks.description')}
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="bg-gray-50 rounded-2xl shadow-md px-8 py-10 min-h-[360px] flex flex-col justify-evenly text-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white"
                    >
                        <div className="flex flex-col items-center gap-4">
                            {icons[index]}
                            <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-base mt-6">{step.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Text under cards */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={steps.length}
                className="mt-16 text-center max-w-3xl mx-auto"
            >
                <p className="text-gray-500 text-base md:text-lg mb-6">
          <span className="font-semibold text-gray-700">
            {t('howItWorks.undertext.highlight')}{' '}
          </span>
                    {t('howItWorks.undertext.text')}
                </p>

                <button className="px-10 py-3 bg-green-600 text-white rounded-full font-medium text-2xl shadow hover:bg-green-700 transition">
                    {t('howItWorks.button')}
                </button>
            </motion.div>
        </section>
    );
}
