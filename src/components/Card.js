import React from 'react';
import '../styles/Card.css';

const Card = () => {
    return (
        <div className='container'>
            <div className="card-area mt-5" style={{ minHeight: "70vh" }}>
                <div className="row my-4">
                    <div className="col-12 pt-4 pb-3 text-center card-item">
                        <p>Card 1</p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-3">
                        <div className='card-item d-flex justify-content-center align-items-center' style={{ height: "300px" }}>
                            <p>Card 2</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='card-item d-flex justify-content-center align-items-center' style={{ height: "300px" }}>
                            <p>Card 3</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='card-item d-flex justify-content-center align-items-center' style={{ height: "300px" }}>
                            <p>Card 4</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 pt-4 pb-3 text-center card-item">
                        <p>Card 5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;