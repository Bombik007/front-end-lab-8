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
    this.clearFiltered = this.clearFiltered.bind(this);
  }

  clearFiltered() {
    this.setState({filtered: []})
  }

  findMatches(wordToMatch) {
    const reg = new RegExp(wordToMatch, "gi");
    let result = [],
        obj, i, j;
    for ( i = 0; i < this.state.origin.length; i++) {
        obj = this.state.origin[i];
      for( j = 0; j < obj.tags.length; j++) { 
        if (obj.tags[j].match(reg)) result.push(obj);        
      }
    }

	  this.setState({filtered: result});
  }

  sortArray(arr) {
    this.setState({origin: arr.sort((a,b) => a.id - b.id)})
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
    if (!origin && selected) this.sortArray(to);
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
                clearFiltered={this.clearFiltered}
              />
              <Counter 
                origin={this.state.origin}
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