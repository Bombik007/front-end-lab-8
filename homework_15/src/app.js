import React from 'react';
import { hot } from 'react-hot-loader';
import UpperPanel from "./features/components/UpperPanel";
import ColorList from "./features/components/ColorList";
import Counter from "./features/components/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        origin: [],
        selected: [],
        filtered: [],
        loaded: false,
        withTags: []
    };

    this.moveTarget = this.moveTarget.bind(this);
  }

  findMatches(wordToMatch) {
    const reg = new RegExp(wordToMatch, "gi");
    let result = [],
        origin = this.state.origin;
    for ( let i = 0; i< origin.length; i++){
      let obj = origin[i];
      for( let j = 0; j< obj.a.length; j++) { 
        if (obj.a[j].match(reg)) result.push(obj);        
      }
    }
	  this.setState({filtered: result});
  }

  moveTarget(id, origin, selected) {
    const copyOrigin = (origin && !selected) ? this.state.origin.slice(0) : this.state.selected.slice(0),
          copySelected = (!origin && selected) ? this.state.selected.slice(0) : this.state.origin.slice(0);
    let target = copyOrigin.find( obj => obj.id === id ),
        index = copyOrigin.indexOf(target),
        spliced = copyOrigin.splice(index, 1),
        final = Object.assign({}, spliced[0]);

    copySelected.push(final);
    this.setState({
      origin: copyOrigin,
      selected: copySelected
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
                moveTarget={this.moveTarget} />
              <Counter 
                origin={this.state.origin}/>
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