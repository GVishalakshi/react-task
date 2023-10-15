import React from 'react'


const CardSection = () => {
  return (
    <div className="card-wrapper">
            <div className="container">
                <div className="card-section-part">
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="cnt-prt">
                            <h5>Earning</h5>
                            <h4>$198k</h4>
                            <p><i className="fa-solid fa-arrow-up"></i> &nbsp; 37.8% &nbsp;this month</p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="cnt-prt scnd">
                            <h5>Order</h5>
                            <h4>$2.4k</h4>
                            <p><i className="fa-solid fa-arrow-down"></i> &nbsp;2% &nbsp;this month</p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="cnt-prt scnd">
                            <h5>Balance</h5>
                            <h4>$2.4k</h4>
                            <p><i className="fa-solid fa-arrow-down"></i> &nbsp;2% &nbsp;this month</p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="cnt-prt">
                            <h5>Total Sales</h5>
                            <h4>$89k</h4>
                            <p><i className="fa-solid fa-arrow-up"></i> &nbsp;11% &nbsp;this week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardSection
