import React, { SyntheticEvent } from "react";
import "./Common/Accordion.css";

function Accordion() {
    const handleAccordionClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        button.classList.toggle("active");

        const panel = button.nextElementSibling as HTMLElement;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = "";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };

    return (
        <div className="sixthSection">
            <div className="sectionSixPageOne">
                <div className="headerpage1">
                    <h1 className="pageOne">Frequently Asked Questions</h1>
                </div>
                {/* <div className="accor">
                    <button className="accordion" onClick={handleAccordionClick}>
                        What Is Netflix?
                    </button>
                    <div className="panel">
                        <p>
                            Netflix is a streaming service that offers a wide variety of
                            award-winning TV shows, movies, anime, documentaries, and more on
                            thousands of internet-connected devices.
                        </p>
                        <p>
                            You can watch as much as you want, whenever you want without a
                            single commercial – all for one low monthly price. There's always
                            something new to discover, and new TV shows and movies are added
                            every week!
                        </p>
                    </div>
                    <button className="accordion" onClick={handleAccordionClick}>
                        How much does Netflix cost?
                    </button>
                    <div className="panel">
                        <p>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                            streaming device, all for one fixed monthly fee. Plans range from
                            USD3.99 to USD9.99 a month. No extra costs, no contracts.
                        </p>
                    </div>
                    <button className="accordion" onClick={handleAccordionClick}>Where I can watch?</button>
                    <div className="panel">
                        <p>
                            Watch anywhere, anytime. Sign in with your Netflix account to
                            watch instantly on the web at netflix.com from your personal
                            computer or on any internet-connected device that offers the
                            Netflix app, including smart TVs, smartphones, tablets, streaming
                            media players and game consoles.</p>
                        <p>
                            You can also download your favorite shows with the iOS, Android,
                            or Windows 10 app. Use downloads to watch while you're on the go
                            and without an internet connection. Take Netflix with you
                            anywhere.
                        </p>
                    </div>
                    <button className="accordion" onClick={handleAccordionClick}>How do I cancel?</button>
                    <div className="panel">
                        <p>
                            Netflix is flexible. There are no pesky contracts and no
                            commitments. You can easily cancel your account online in two
                            clicks. There are no cancellation fees – start or stop your
                            account anytime.
                        </p>
                    </div>
                    <button className="accordion" onClick={handleAccordionClick}>What can I watch on Netflix?</button>
                    <div className="panel">
                        <p>
                            Netflix has an extensive library of feature films, documentaries,
                            TV shows, anime, award-winning Netflix originals, and more. Watch
                            as much as you want, anytime you want.
                        </p>
                    </div>
                    <button className="accordion" onClick={handleAccordionClick}>Is Netflix good for kids?</button>
                    <div className="panel">
                        <p>
                            The Netflix Kids experience is included in your membership to give
                            parents control while kids enjoy family-friendly TV shows and
                            movies in their own space.</p>
                        <p>
                            Kids profiles come with PIN-protected parental controls that let
                            you restrict the maturity rating of content kids can watch and
                            block specific titles you don’t want kids to see.
                        </p>
                    </div>
                </div>
                <div className="QuestionsSection">
                    <h2 className="h2QuestionsSection">
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h2>
                </div> */}


                <div className="Wrapper">
                    <div className="Accordion"></div>
                </div>




                <div className="emailForm">
                    <div className="placeHolderPage1">
                        <input
                            placeholder="Email address"
                            className="emailPlaceHolder"
                            id="inputPlaceholder"
                        />
                    </div>
                    <div className="buttonPageQuestions">
            <button className="buttonEmail">
              Get Started 
            </button>
          </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;

const data = [
    {
        question: 'What Is Netflix?',
        Answer:'Netflix is a streaming service that offers a wide variety of
        award-winning TV shows, movies, anime, documentaries, and more on
        thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a
        single commercial – all for one low monthly price. There's always
        something new to discover, and new TV shows and movies are added
        every week!'
    },
    
]