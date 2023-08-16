import React from "react";
import Card from "../components/Card/Card";
import './styles.css'

const Attorney = () => {
    const attorneyData = [
        { 
            imgSrc: 'https://previews.123rf.com/images/iimages/iimages1506/iimages150600365/41726845-lawyer-in-suit-holding-a-law-book.jpg',
            imgAlt:"Card Image", 
            description:"A hassle-free filing process with our user-friendly interface. Our intuitive step-by-step guidance ensures that you are guided through the entire No-Fault filing process with ease.",
            buttonText:"Visit their page",
            link:"cardPage",
            className: "smallCard",
        },
        {
            imgSrc: 'https://i.etsystatic.com/40478325/r/il/7c12cf/4877347325/il_fullxfull.4877347325_rad9.jpg', 
            imgAlt:"Card Image",
            description:"Connecting with experienced professionals who provide personalized legal assistance throughout your recovery process through our intelligent attorney matching system. Find the right attorney who understands your needs and can guide you every step of the way.",
            buttonText:"Visit their page",
            link:"cardPage",
            className: "smallCard",
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXvynyX2lUyFwiV5ejtIZCfX4cLYBnFwo1A&usqp=CAU',
            imgAlt:"Card Image",
            description:"The convenience of secure document management with our platform. Easily upload and store all your important files in one place, ensuring accessibility anytime and anywhere you need them.",
            buttonText:"Visit their page",
            link:"cardPage",
            className: "smallCard"
        },
    ];

    return (
        <div className="container text-center cardContainer">

            <div className="text-center mb-5 alert alert-primary">
                <label htmlFor="" className="h2">
                Our attorney-matching services include:
                </label>
            </div>
            
            <div className="row">
                {attorneyData.slice().map((card, index) => (
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

export default Attorney;