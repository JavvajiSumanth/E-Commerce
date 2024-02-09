const TrackOrder = () => {

    const trackSubmit = (event) => {
        event.preventDefault()
        console.log("submit",event.target.value);
    };

    return (  

        <div className="track-order">
            <div className="track-order-form">
                <h1 className="track-order-heading">Track Order</h1>
                {/* <hr/> */}
                <p>Enter the order ID and email address that was used to create the order, and then click the track button.</p>
                <form className="track-form" onSubmit={trackSubmit}>
                    <p>Order ID</p>
                    <input type="text" placeholder="Order ID" className="form-item" name="track" id="form-1"></input>
                    <p>Email Address</p>
                    <input type="email" placeholder="user@example.com" className="form-item" name="track" id="form-2"></input> 
                    <button type="submit" className="track-submit">Track</button>
                </form>
            </div>
        </div>
    );
}
 
export default TrackOrder;