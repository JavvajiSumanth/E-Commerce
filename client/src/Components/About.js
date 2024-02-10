import { useState } from 'react';
import about from '../assets/about.png';
import member1 from '../assets/members/member1.png';
import member2 from '../assets/members/member2.png';
import member3 from '../assets/members/member3.png';
import member4 from '../assets/members/member4.png';
import member5 from '../assets/members/member5.png';

const About = () => {

    const [feedbackName,setFeedbackName] = useState('');
    const [feedbackEmail,setFeedbackEmail] = useState('');
    const [feedbackText,setFeedbackText] = useState('');

    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        console.log("feedback submit");
        document.getElementById("myForm").reset();

        const feedbackDetaills = [feedbackName,feedbackEmail,feedbackText];

        const feedbackResponse = await fetch('http://localhost:4000/feedback',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(feedbackDetaills)
        })

        
    };

    return (
        <div className="about">
            <div className="background-about" style={{ backgroundImage: `url(${about})` }}>
                <div className="about-card">
                    <h1 className="about-us">About Us</h1>
                    <p>RedParts is an international company with 30 years of history selling spare parts for cars, trucks and motorcycles. During our work we managed to create a unique service for the sale and delivery of spare parts around the world.</p>
                    <p>-- Ryan Ford, CEO RedParts</p>
                    <p>Signature</p>
                </div>
            </div>
            <div className="team">
                <h1 className="team-heading">Professional Team</h1>
                <p className="team-subheading">Meet this is our professional Team</p>
                <div className="member">
                    <div className="member-card">
                        <img src={member1} className="member-card-images"></img>
                        <p>Ryan Ford</p>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div className="member-card">
                        <img src={member2} className="member-card-images"></img>
                        <p>Ryan Ford</p>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div className="member-card">
                        <img src={member3} className="member-card-images"></img>
                        <p>Ryan Ford</p>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div className="member-card">
                        <img src={member4} className="member-card-images"></img>
                        <p>Ryan Ford</p>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div className="member-card">
                        <img src={member5} className="member-card-images"></img>
                        <p>Ryan Ford</p>
                        <p>Chief Executive Officer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <h1 className="testimonial-title">Testimonials</h1>
                <p className="testimonial-subtitle">During our work we have accumulated hundreds of positive reviews.</p>
            </div>
            <div className="feedback">
                <h1 className="feedback-heading">Please Provide Us With Your Feedback</h1>
                <p className="feedback-subheading">We are always looking for new ways to improve our services.</p>
                <form className="feedback-form" id="myForm" onSubmit={handleFeedbackSubmit}>
                    <label for="feedback-name" className="feedback-form-titles">Name</label>
                    <input type="text" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} name="feedback-name" id="feedback-name" placeholder="Enter Your Name" required></input>
                    <label for="feedback-email" className="feedback-form-titles">Email</label>
                    <input type="email" value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} name="feedback-email" id="feedback-email" placeholder="Enter Your Email"></input>
                    <label for="feedback-text" className="feedback-form-titles">Feedback</label>
                    <textarea placeholder="Enter Your Feedback" value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} name="feedback-text" id="feedback-text" rows='5'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default About;