import masaz from './images/masaz.jpg';

const About = () => {
    return (
        <section id="about" className="bg-background py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-cormorant text-center text-gray-800 mb-8">
                    Perfektní masáže
                </h2>
                <div className="flex flex-wra p justify-center items-center text-gray-600">
                    <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
                        <p className="mb-6 text-xl font-cormorant">
                            Moje služby jsou dělány čistě ze zájmu a lásky, můžete se připravit na příjemné domácí prostředí,
                            kde se budete cítit jako v ráji.
                        </p>
                        <p className="mb-6 text-xl font-cormorant">
                            Podívejte se na moji nabídku služeb a jsem si zcela jistá, že si vyberete alespoň jednu z nich.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 ml-24 px-6">
                        <img src={masaz} alt="Woman massaging someone"
                             className="max-w-full h-auto shadow-lg rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;