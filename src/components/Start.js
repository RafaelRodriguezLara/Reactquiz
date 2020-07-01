import React from 'react';
import { Link } from 'react-router-dom';

class Start extends React.Component{

    render(){
        return (
          <div className="start-div">
            <Link to="/quiz">
              <button className="start-button">Start new game</button>
            </Link>
          </div>
        );
    }

}

export default Start