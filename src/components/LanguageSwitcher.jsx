import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', label: 'US' },
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'EN' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    return (
        <div className="relative inline-block">
            <select
                className="text-sm border border-gray-300 rounded px-2 py-1 bg-white shadow-sm"
                value={i18n.language}
                onChange={(e) => handleChange(e.target.value)}
            >
                {languages.map(({ code, label }) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
}
