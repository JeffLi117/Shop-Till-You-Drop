import { Link } from 'react-router-dom';
import film from './film.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="homePage" >
      <img src={film} alt="filming equipment" className="homeImg" />
      <div className="homeCenter">
        <div className="aboveEnter" >"Cinema is a matter of what's in the frame and what's out."</div>
        <div className="aboveEnterAuthor" >Martin Scorsese</div>
        <Link to="/home" >
          <div className="enter" >
            <FontAwesomeIcon icon={faAnglesRight} className="arrows L" />
            <div className="betweenArrows" >Enter</div>
            <FontAwesomeIcon icon={faAnglesLeft} className="arrows R" />
            </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
