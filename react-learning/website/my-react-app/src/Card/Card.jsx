import profilePic from '../assets/react.svg';

function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="profile pic" src={profilePic}></img>
            <h2 className="card-title">Vaibhav Thukral</h2>
            <p className="card-text">Software engineer</p>
        </div> 
    )
}

export default Card; 