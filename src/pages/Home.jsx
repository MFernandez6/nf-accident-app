import React from "react";
import Card from "../components/Card/Card";
import cs3 from '../img/cs3.jpg'
import '../pages/styles.css'

const Home = () => {
    const cardsData = [
        {
            vidSrc: "https://www.youtube.com/embed/3FlAkzE9xWc",
            buttonText:"Sign Up",
            link:"signup",
        },
        {                 
            imgSrc: cs3,
            imgAlt:"Card Image",
            description:"Welcome to ClaimSaver+ - We specialize in providing assistance and support to individuals who have been involved in no-fault motor vehicle collisions. By completing our questionnaire, our advanced algorithm generates personalized recommendations on how to navigate your claim efficiently, saving you from the expensive fees associated with hiring an attorney. At ClaimSaver+, we understand the stress and confusion that can arise after an accident. That's why we are committed to providing personalized attention and reliable services to our clients. Whether you need help with medical bills, property damage, or negotiating a fair settlement, we've got you covered.",
            buttonText:"Learn More",
            link:"cardPage",
        },
        { 
            imgSrc: cs3, 
            imgAlt:"Card Image", 
            description:"A hassle-free filing process with our user-friendly interface. Our intuitive step-by-step guidance ensures that you are guided through the entire No-Fault filing process with ease.",
            buttonText:"Learn More",
            link:"cardPage",
            className: "smallCard",
        },
        {
            imgSrc: cs3,
            imgAlt:"Card Image",
            description:"Connecting with experienced professionals who provide personalized legal assistance throughout your recovery process through our intelligent attorney matching system. Find the right attorney who understands your needs and can guide you every step of the way.",
            buttonText:"Learn More",
            link:"cardPage",
            className: "smallCard",
        },
        {
            imgSrc: cs3,
            imgAlt:"Card Image",
            description:"The convenience of secure document management with our platform. Easily upload and store all your important files in one place, ensuring accessibility anytime and anywhere you need them.",
            buttonText:"Learn More",
            link:"cardPage",
            className: "smallCard"
        },
    ];

    return (
        <div className="container text-center cardContainer">
            <div className="row">
                <h1 className="col-md-12 welcomeText">Welcome to ClaimSaver+</h1>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <Card
                        className="cardVid"
                        vidSrc={cardsData[0].vidSrc}
                        buttonText={cardsData[0].buttonText}
                        link={cardsData[0].link}
                    />
                </div>

                <div className="col-md-6">
                    <Card 
                        imgSrc={cardsData[1].imgSrc}
                        imgAlt={cardsData[1].imgAlt}
                        title={cardsData[1].title}
                        description={cardsData[1].description}
                        buttonText={cardsData[1].buttonText}
                        link={cardsData[1].link}
                    />
                </div>
            </div>
            <h1 className="col-md-12">Our comprehensive services include:</h1>
            <div className="row">
                {cardsData.slice(2).map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <Card 
                            imgSrc={card.imgSrc} 
                            imgAlt={card.imgAlt}
                            title={card.title} 
                            description={card.description}
                            buttonText={card.buttonText}
                            link={card.link}
                            className={card.className}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;