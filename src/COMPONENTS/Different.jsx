import React from 'react'
import support from '../assets/diff/24x7support.jpg'
import competetive from '../assets/diff/competetive.png'
import compliances1 from '../assets/diff/compliances.png'
import ease from '../assets/diff/ease.jpg'
import emargency from '../assets/diff/emargency.png'
import training from '../assets/diff/training.jpg'


const Different = () => {
    const cards = [
        {
            title: "Administrative Ease",
            description: "Working with Khyatishield Security will reduce the administrative burden, with us doing most of the tasks.",
            image: ease
        },
        {
            title: "Trained & Uniformed Manpower",
            description: "All employees undergo full-fledged training on the proper use of equipment and systems, thereby increasing efficiency and capacity.",
            image: training
        },
        {
            title: "Fullfiling Compliance",
            description: "We are a responsible company and fulfill compliances for our employees that cover PSARA, ESIC, PF, Taxes and Bonus..",
            image: compliances1
        },
        {
            title: "Emergency Support",
            description: "Consciously identifying and responding to danger is of utmost importance in situations in which emergencies are foreseen.",
            image: emargency
        },
        {
            title: "Competitive Pricing",
            description: "Khyatishield offers the best budget for clients without compromising on quality and values.",
            image: competetive
        },
        {
            title: "24/7 Customer Support",
            description: "In addition to all aspects of job knowledge and performance standards, service providers are trained in 24/7 customer care as well.",
            image: support
        }
        
    ];

    // while (cards.length < 8) {
    //     cards.push({
    //         title: "Scaffolding",
    //         description: "We are into providing best manpower services for Eraction & Dismantal...",
    //         image: "/path-to-your-image.jpg",
    //     });
    // }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <h2 className="text-5xl font-bold text-black mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((point, index) => (
                    <div key={index} className="bg-white flex items-center p-4 shadow-lg rounded-lg transition-all duration-300 ease-in-out ">
                        <img src={point.image} alt={point.title} className="w-12 h-12 mr-4" />
                        <div className='custom-hover-text'>
                            <h3 className="text-lg font-bold text-blue-600 cursor-pointer">{point.title}</h3>
                            <p className="text-sm text-gray-600">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Different