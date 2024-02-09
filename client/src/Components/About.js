import about from '../assets/about.png';

const About = () => {
    return (  
        <div className="about">
            <div className="background-about" style={{backgroundImage: `url(${about})`}}>
                <div className="about-card">
                    <h1 className="about-us">About Us</h1>
                    <p>RedParts is an international company with 30 years of history selling spare parts for cars, trucks and motorcycles. During our work we managed to create a unique service for the sale and delivery of spare parts around the world.</p>
                    <p>-- Ryan Ford, CEO RedParts</p>
                    <p>Signature</p>
                </div>
            </div>
            <div className="team">
                
            </div>
        </div>
    );
}
 
export default About;