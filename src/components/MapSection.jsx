import { useTranslation } from 'react-i18next';

export default function MapSection() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-[400px]">
            <iframe
                title={t('map.title')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.3329970419296!2d-80.2543701!3d25.8177078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b99fcf69f5f5%3A0x71e6cdb678b1e6b7!2s3797%20NW%2046th%20St%2C%20Miami%2C%20FL%2033142%2C%20USA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
            ></iframe>
        </section>
    );
}
