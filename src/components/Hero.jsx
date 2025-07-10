// src/pages/Home.jsx
export default function Home() {
    return (
        <section className="bg-[url('https://www.azom.com/images/news/ImageForNews_62803_17121549353144590.jpg')] bg-cover bg-center text-white h-[80vh] flex items-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Power that <span className="text-yellow-400">Outperforms</span><br />
                    Without Replacing
                </h1>
                <p className="text-lg mb-8">
                    Industrial battery restoration that saves you money,<br />
                    time, and the environment.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#quote"
                        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold"
                    >
                        FIND OUT HOW MUCH YOU COULD SAVE!
                    </a>
                    <a
                        href="#quote"
                        className="border border-white px-6 py-3 rounded-md font-semibold"
                    >
                        GET A QUOTE
                    </a>
                </div>
            </div>
        </section>
    );
}