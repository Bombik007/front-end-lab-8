import React from 'react';
import { hot } from 'react-hot-loader';
import UpperPanel from "./features/UpperPanel";
import ColorList from "./features/ColorList";
import Counter from "./features/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        origin: [],
        selected: [],
        filtered: [],
        loaded: false
    };
    this.moveTarget = this.moveTarget.bind(this);
    this.findMatches = this.findMatches.bind(this);
  }

  findMatches(wordToMatch) {
    const reg = new RegExp(wordToMatch, "gi");
    let result = [],
        obj, i, j;
    for ( i = 0; i < this.state.origin.length; i++) {
        obj = this.state.origin[i];
      for ( j = 0; j < obj.tags.length; j++) { 
        if (obj.tags[j].match(reg)) result.push(obj);        
      }
    }
    if (wordToMatch.length == 0) result = [];
    this.setState({filtered: result});
  }

  moveTarget(id, origin, selected) {
    const from = (origin && !selected) ? this.state.origin.slice(0) : this.state.selected.slice(0),
          to = (!origin && selected) ? this.state.origin.slice(0) : this.state.selected.slice(0);
    let target = from.find( obj => obj.id === id ),
        index = from.indexOf(target),
        spliced = from.splice(index, 1),
        final = Object.assign({}, spliced[0]),
        state1 = (origin && !selected) ? "origin" : "selected",
        state2 = (!origin && selected) ? "origin" : "selected";

    to.push(final);
    if (!origin && selected) {
      this.setState({origin: to.sort((a,b) => a.id - b.id)})
    }
    this.setState({
      [state1] : from,
      [state2]: to
    });
  }

    componentDidMount() {
      fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
        .then(response => {
          response.json()
          .then((data) => {
            this.setState({
              origin: data,
              loaded: true
            });
          });
      });
    }

    render() {
        return (
            <div>
              <UpperPanel 
                origin={this.state.origin}
                selected={this.state.selected}
                moveTarget={this.moveTarget}
                findMatches={this.findMatches}
              />
              <Counter 
                origin={this.state.origin}
                filtered={this.state.filtered}
              />
              <ColorList 
                origin={this.state.origin}
                selected={this.state.selected}
                loaded={this.state.loaded}
                filtered={this.state.filtered}
                moveTarget={this.moveTarget}
              />
            </div>
        )
    }
}

export default hot(module)(App);