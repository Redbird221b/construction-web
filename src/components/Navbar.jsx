import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Логотип */}
                <Link to="/" className="text-3xl font-bold text-green-700">
                    BSF
                </Link>

                {/* Бургер-иконка */}
                <div className="md:hidden text-2xl text-green-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>

                {/* Desktop Навигация */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-700 hover:text-green-700">{t('navbar.links.home')}</Link>
                    <Link to="/about-us" className="text-gray-700 hover:text-green-700">{t('navbar.links.about')}</Link>
                    <Link to="/the-process" className="text-gray-700 hover:text-green-700">{t('navbar.links.process')}</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-green-700">{t('navbar.links.contact')}</Link>
                </nav>

                {/* Правая часть */}
                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="#quote"
                        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 text-sm"
                    >
                        {t('navbar.quote')}
                    </a>
                    <span className="text-gray-700 text-sm font-medium">
                        {t('navbar.phone')}
                    </span>
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow">
                    <Link onClick={() => setIsOpen(false)} to="/" className="block text-gray-700 hover:text-green-700">
                        {t('navbar.links.home')}
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/about-us" className="block text-gray-700 hover:text-green-700">
                        {t('navbar.links.about')}
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/the-process" className="block text-gray-700 hover:text-green-700">
                        {t('navbar.links.process')}
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/contact" className="block text-gray-700 hover:text-green-700">
                        {t('navbar.links.contact')}
                    </Link>
                    <a
                        href="#quote"
                        className="block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 text-sm text-center"
                    >
                        {t('navbar.quote')}
                    </a>
                    <div className="text-center text-sm text-gray-700">
                        {t('navbar.phone')}
                    </div>
                    <div className="flex justify-center mt-2">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </header>
    );
}
