import { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function HelpSection() {
    const { t } = useTranslation();
    const services = t('help.services', { returnObjects: true }).map((s) => ({
        ...s,
        icon: <FaLeaf />,
        image: getImageForService(s.name),
    }));

    const [activeIndex, setActiveIndex] = useState(0);
    const active = services[activeIndex];

    return (
        <section className="py-24 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Left side */}
                <div>
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                        {t('help.badge')}
                    </div>

                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        {t('help.title')}
                    </h2>
                    <p className="text-gray-600 mb-8">{t('help.description')}</p>

                    <div className="flex flex-col gap-4">
                        {services.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all border ${
                                    activeIndex === idx
                                        ? 'bg-green-700 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                <span className="mr-3">{s.icon}</span>
                                {s.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right side */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-3xl shadow-xl space-y-6">
                    <img
                        src={active.image}
                        alt={active.name}
                        className="rounded-xl w-full h-56 object-cover"
                    />
                    <div className="flex items-center gap-4">
                        <div className="bg-green-700 text-white p-3 rounded-full text-xl">
                            {active.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{active.name}</h3>
                    </div>
                    <p className="text-gray-600">{active.description}</p>

                    <button className="mt-4 px-6 py-3 border border-gray-800 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition">
                        {t('help.button')}
                    </button>
                </div>
            </div>
        </section>
    );
}

// Хелпер для подстановки картинок
function getImageForService(name) {
    switch (name) {
        case 'On-Site Diagnostic':
            return 'https://www.bsf-usa.com/wp-content/uploads/2024/01/On-Site-Diagnostic-1.jpg';
        case 'Restoration':
            return 'https://www.bsf-usa.com/wp-content/uploads/2024/01/Restoration.jpg';
        case 'Maintenance':
            return 'https://www.bsf-usa.com/wp-content/uploads/2024/01/Maintenance.jpg';
        default:
            return '';
    }
}
