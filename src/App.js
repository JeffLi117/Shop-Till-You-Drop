import { Link } from 'react-router-dom';
import film from './film.jpg';

function App() {
  return (
    <div className="homePage" >
      <img src={film} alt="filming equipment" className="homeImg" />
      <div className="homeCenter">
        <div className="aboveEnter" >"Cinema is a matter of what's in the frame and what's out."</div>
        <div className="aboveEnterAuthor" >Martin Scorsese</div>
        <Link to="/home" >
          <div className="enter" >Enter</div>
        </Link>
      </div>
    </div>
  );
}

export default App;
