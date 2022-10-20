import { Link } from "react-router-dom";
import "./TripStyle.scss";
import line from "../../assets/line.png";

const Trip = () => {
  return (
    <div className="trip-offer">
      <div className="trip-offer__text-content">
        <h1>ПУТЕШЕСТВИЕ</h1>
        <p>НА КРАСНУЮ ПЛАНЕТУ</p>
      </div>
      <Link to="/schedule"><button className="trip-offer__button">Начать путешествие</button></Link> 
      <img src={line} alt="" className="trip-offer__line" />
    </div>
  );
};

export default Trip;
