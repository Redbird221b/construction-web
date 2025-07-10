import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    const linkItems = t('footer.links.items', { returnObjects: true });

    return (
        <footer
            className="relative bg-fixed bg-center bg-cover text-white py-28 px-6"
            style={{
                backgroundImage: `url('https://www.bsf-usa.com/wp-content/uploads/2024/01/hero-bg-1.webp')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-brightness-110 z-0" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl mx-auto backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-10 md:p-16 shadow-[0_8px_32px_0_rgba(31,38,135,0.3)]"
            >
                {/* Top Call Line */}
                <p className="text-center text-lg md:text-xl font-medium mb-6">
                    {t('footer.call')}: <span className="text-green-600 font-bold">{t('footer.contact.phone')}</span>
                </p>

                <hr className="border-white/40 mb-10" />

                {/* Content Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-800">
                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/vite.svg" alt="BSF Logo" className="w-28 h-28 mb-4" />
                        <p className="text-center md:text-left font-semibold text-green-800">
                            {t('footer.company')}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-3">{t('footer.contact.title')}</h4>
                        <p className="mb-1">{t('footer.contact.phone')}</p>
                        <p className="mb-1">{t('footer.contact.email')}</p>
                        <p className="mb-4 whitespace-pre-line">{t('footer.contact.address')}</p>
                        <div className="flex gap-3 text-xl">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-3">{t('footer.links.title')}</h4>
                        <ul className="space-y-2">
                            {linkItems.map((label, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-white">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Email Subscribe */}
                    <div>
                        <h4 className="font-bold mb-3">{t('footer.subscribe.title')}</h4>
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder={t('footer.subscribe.placeholder')}
                                className="rounded-full px-5 py-3 text-black placeholder-gray-600 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-green-700 hover:bg-green-800 transition-colors text-white font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2"
                            >
                                {t('footer.subscribe.button')} <FaPaperPlane />
                            </button>
                            <p className="text-xs text-gray-800 text-center">
                                {t('footer.subscribe.note')}
                            </p>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <p
                    className="mt-10 text-xs text-center text-gray-800"
                    dangerouslySetInnerHTML={{
                        __html: t('footer.copyright', { year })
                    }}
                />
            </motion.div>
        </footer>
    );
}
