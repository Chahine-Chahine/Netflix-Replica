import { useState } from "react";
import accordionStyles from "./Accordion.module.css";
import { SlArrowRight } from "react-icons/sl";

function Accordion() {
    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <>
            <div className={accordionStyles.sectionSix}>
                <div className={accordionStyles.wrapper}>
                    <div className={accordionStyles.headerpage1}>
                        <h1 className={accordionStyles.pageOne}>
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className={accordionStyles.accordion}>
                        {data.map((item, i) => (
                            <div className={accordionStyles.item}>
                                <div
                                    className={accordionStyles.title}
                                    onClick={() => toggle(i)}
                                >
                                    <h2>{item.Question}</h2>
                                    <span>{selected === i ? "X" : "+"}</span>
                                </div>
                                <div
                                    className={`${accordionStyles.content} ${selected === i ? accordionStyles.show : ""
                                        }`}
                                >
                                    {item.Answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={accordionStyles.sectionCreate}>
                    <div className={accordionStyles.QuestionsSection}>
                        <h2 className={accordionStyles.h2QuestionsSection}>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </h2>
                    </div>

                    <div className={accordionStyles.emailForm}>
                        <div className={accordionStyles.placeHolderPage1}>
                            <input
                                type="text"
                                placeholder="Email address"
                                className={accordionStyles.emailPlaceHolder}
                                id="inputPlaceholder"
                            />
                            <button className={accordionStyles.buttonEmail}>
                                Get Started{" "}
                                <SlArrowRight className={accordionStyles.arrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
const data = [
    {
        Question: "What Is Netflix? ",
        Answer:
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!",
    },
    {
        Question: "How much does Netflix cost?",
        Answer:
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD9.99 a month. No extra costs, no contracts.",
    },
    {
        Question: "Where I can watch? ",
        Answer:
            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
        Question: "How do I cancel? ",
        Answer:
            "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
        Question: "What can I watch on Netflix?",
        Answer:
            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
        Question: "Is Netflix good for kids?",
        Answer:
            "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
];

export default Accordion;
