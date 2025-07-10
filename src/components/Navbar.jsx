import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Navbar() {
    const {t} = useTranslation();

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Логотип */}
                <Link to="/" className="text-5xl font-bold text-green-700">
                    BSF
                </Link>

                {/* Навигация */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-700 hover:text-green-700">
                        {t('navbar.links.home')}
                    </Link>
                    <Link to="/about-us" className="text-gray-700 hover:text-green-700">
                        {t('navbar.links.about')}
                    </Link>
                    <Link to="/the-process" className="text-gray-700 hover:text-green-700">
                        {t('navbar.links.process')}
                    </Link>
                    <Link to="/contact" className="text-gray-700 hover:text-green-700">
                        {t('navbar.links.contact')}
                    </Link>
                </nav>

                {/* Правая часть */}
                <div className="flex items-center space-x-4">
                    <a
                        href="#quote"
                        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 text-sm"
                    >
                        {t('navbar.quote')}
                    </a>
                    <span className="hidden md:inline text-gray-700 text-sm font-medium">
            {t('navbar.phone')}
          </span>
                    <LanguageSwitcher/>
                </div>
            </div>
        </header>
    );
}
