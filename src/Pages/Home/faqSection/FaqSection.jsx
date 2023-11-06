import React from 'react';
import faq from '../../../assets/faq.svg'
const FaqSection = () => {
    
    return (
        <div className='lg:flex justify-around'>
            <div className='lg:w-1/2'>
                <div className="collapse collapse-plus bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Who facilitates the Study Groups?
                    </div>
                    <div className="collapse-content">
                        <p> Study group facilitators are undergraduate students who have successfully completed the course in a previous term who are trained in collaborative learning and facilitation techniques.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Who should join a Study Group?
                    </div>
                    <div className="collapse-content">
                        <p>All students enrolled in the course are eligible to enroll in a study group. Students of all ability levels are encouraged to join a study group.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What are Peer Led Study Groups?
                    </div>
                    <div className="collapse-content">
                        <p>Peer Led Study Groups are offered through the SLC as an option for outside-of-class learning for introductory level science courses.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium mb-4">
                    How do students register for Study Groups?
                    </div>
                    <div className="collapse-content">
                        <p>All registration is processed through an online registration system.</p>
                    </div>
                </div>
               

            </div>

            <div className='lg:w-1/2'>
                <img src={faq} alt="img" />
            </div>
        </div>
    );
};

export default FaqSection;