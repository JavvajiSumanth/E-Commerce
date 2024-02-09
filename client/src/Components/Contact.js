const Contact = () => {
    return (  
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-form">
                <div className="address">
                    <h1>Our Address</h1>
                    <pre>715 Fake Ave, Apt. 34, New York, NY 10021 USA<br/>
                        Email: red-parts@example.com<br/>
                        Phone Number: +1 754 000-00-00</pre>
                        <p>Opening Hours
Monday to Friday: 8am-8pm
Saturday: 8am-6pm
Sunday: 10am-4pm</p>

                </div>
                <div className="message">
                    <h1>Leave us a Message</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="username">Your Name</label>
                                <input type="text" placeholder="Your Name" name="username" id="username"></input>  
                            </div>
                            <div className="form-group col-md-6">
                            <label for="email">Email</label>
                                <input type="email" placeholder="Email Address" name="email" id="email"></input>  
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;