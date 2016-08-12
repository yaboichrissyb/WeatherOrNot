import React from 'react';
import ReactDOM from 'react-dom';

Cities = new Mongo.Collection('cities');

export default class App extends React.Component {
  render(){
    return(
      <div className="container app-container">

        <div id="current-container" className="row">

        </div>
        <div className="row">
          <div className="arrow-box col s2">
            <i className="mdi mdi-arrow-left-bold"></i>
          </div>
          <div id="day-container" className="col s8">
            <div className="hour center-align">
            1
            </div>
            <div className="hour center-align">
            2
            </div>
            <div className="hour center-align">
            3
            </div>
            <div className="hour center-align">
            4
            </div>
            <div className="hour center-align">
            5
            </div>
            <div className="hour center-align">
            6
            </div>
          </div>
          <div className="arrow-box col s2">
            <i className="mdi mdi-arrow-right-bold"></i>
          </div>
        </div>

        <div className="row">
          <div className="arrow-box col s1"><i className="mdi mdi-arrow-left-bold"></i></div>
          <div id="week-container" className="col l10 m10 s10 ">
            <div className="day">Mon</div>
            <div className="day">Tues</div>
            <div className="day">Wed</div>
            <div className="day">Thurs</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
            <div className="day">Sun</div>
          </div>
          <div className="arrow-box col s1"><i className="mdi mdi-arrow-right-bold"></i></div>
        </div>

        <div id="menu-tab"></div>

      </div>

    )
  }
}

if(Meteor.isClient){
  Meteor.startup(function(){
    ReactDOM.render(<App/>, document.getElementById('app'))
  });
}
