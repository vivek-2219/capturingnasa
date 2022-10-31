import React from 'react'

const AsteroidCard = (props) => {

    return (
        <>
            <div className="card m-3" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Name : {props.asteroidName}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Minimum Diameter : {props.minDia}meters</li>
                    <li className="list-group-item">Maximum Diameter : {props.maxDia}meters</li>
                    <li className="list-group-item">Closest Approach Date : <br />{props.closestApproach}</li>
                    <li className="list-group-item">Relative Velocity: {props.relativeVelocity}km/s</li>
                    <li className="list-group-item">Miss Distance : {props.missDistance}km</li>
                    <li className="list-group-item">Potentially Hazardous : {'Yes' ? props.hazardous === true : 'No'}</li>
                    <li className="list-group-item">Orbiting : {props.orbitingBody}</li>
                </ul>
            </div>
        </>
    )
}

export default AsteroidCard
