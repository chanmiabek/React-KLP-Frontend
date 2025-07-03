import React from 'react';
import { Link } from 'react';
const FAQ = () => {
    return (
    <div className="container my-5">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Who can join KLP courses?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
                Anyone from the Kakuma refugee camp or host community is welcome.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Are the courses free?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
                Yes, all courses on KLP are offered for free to the community.
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default FAQ;
