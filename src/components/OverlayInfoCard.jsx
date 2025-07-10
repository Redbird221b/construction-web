import { useTranslation } from 'react-i18next';

export default function OverlayInfoCard() {
    const { t } = useTranslation();

    return (
        <div className="relative z-30">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 w-full max-w-4xl px-4">
                <div className="bg-white rounded-2xl shadow-2xl px-6 py-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Левая часть */}
                    <div className="text-center md:text-left">
                        <h3
                            className="text-lg font-bold text-gray-800"
                            dangerouslySetInnerHTML={{
                                __html: t('overlayInfo.headline').replace(
                                    '<strong>',
                                    '<span class="text-green-600">'
                                ).replace('</strong>', '</span>')
                            }}
                        />
                        <p className="text-sm font-semibold text-gray-700 mt-1">
                            {t('overlayInfo.subtext')}
                        </p>
                    </div>

                    {/* Центр (логотип или иконка) */}
                    <div className="flex justify-center">
                        <img
                            src="/vite.svg"
                            alt="BSF Logo"
                            className="w-12 h-12"
                        />
                    </div>

                    {/* Правая часть */}
                    <div className="text-center md:text-right text-sm">
                        <p className="text-green-600 font-bold text-base">
                            {t('overlayInfo.phone')}
                        </p>
                        <p className="text-gray-800 font-semibold">
                            {t('overlayInfo.email')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
