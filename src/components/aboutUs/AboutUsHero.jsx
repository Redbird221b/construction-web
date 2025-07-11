import { useTranslation } from 'react-i18next';
import worldMap from '../../assets/world-map.jpg';
import { motion } from 'framer-motion';

export default function AboutUsHero() {
    const { t } = useTranslation();

    return (
        <section>
            {/* Hero Section */}
            <div
                className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('https://www.bsf-usa.com/wp-content/uploads/2024/01/BSF-battery-about.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/70" />
                <motion.div
                    className="relative text-center z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{t('aboutHero.title')}</h1>
                    <p className="text-sm md:text-base">
                        <a href="/" className="text-green-400 hover:underline">
                            {t('aboutHero.home')}
                        </a> / {t('aboutHero.title')}
                    </p>
                </motion.div>
            </div>

            {/* Stats & Map Section */}
            <div className="py-16 px-4 max-w-5xl mx-auto text-center">
                <motion.span
                    className="uppercase text-xs text-green-700 tracking-wide block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t('aboutHero.badge')}
                </motion.span>

                <motion.h2
                    className="text-2xl md:text-3xl font-bold mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {t('aboutHero.heading')}
                </motion.h2>

                <motion.p
                    className="text-gray-600 text-sm mt-2 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {t('aboutHero.subtitle')}
                </motion.p>

                {/* Stats */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                    {[{
                        value: '+10',
                        label: t('aboutHero.stats.experience'),
                        delay: 0.2
                    }, {
                        value: '3282',
                        label: t('aboutHero.stats.projects'),
                        delay: 0.4
                    }].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white shadow rounded p-6 w-[180px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay, duration: 0.6 }}
                        >
                            <div className="text-green-600 font-bold text-xl">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* World Map */}
                <motion.img
                    src={worldMap}
                    alt="Global Presence"
                    className="mx-auto w-full max-w-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />
            </div>
        </section>
    );
}
