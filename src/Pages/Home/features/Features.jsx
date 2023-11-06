import React from 'react';

const Features = ({ feature }) => {
    const { id, title, img, description } = feature;


    return (
        <div className="card bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Features;