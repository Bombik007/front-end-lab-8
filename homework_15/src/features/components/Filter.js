import React from "react";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState( {inputText: e.target.value});
    }
    
    render() {
        return (
            <input 
                type="text" 
                name="colorPicker"
                value={this.state.inputText}
                onChange={this.onChange} 
                placeholder="Color's name, tags"
                className="filter"
                autoFocus
            />
        )
    }
}

export default Filter;