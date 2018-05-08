import React from "react";

class ColorContainer extends React.Component {
    render() {
        return (
            <div 
                className="thumbnail block_color" 
                style={{background: this.props.color}}
                id={this.props.id}>
                    <button 
                        onClick={() => this.props.moveTarget(this.props.id, 1, 0)}>
                        <i className="material-icons add">add</i>
                        Add 
                    </button>
            </div>
        )
    }
}

export default ColorContainer;