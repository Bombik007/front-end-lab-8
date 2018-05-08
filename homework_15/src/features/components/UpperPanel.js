import React from "react";
import Filter from "./Filter";
import SelectedColors from "./SelectedColors";

class UpperPanel extends React.Component {
    render() {
        return (
            <div className="flex_row upper_panel">
                <Filter />
                <SelectedColors 
                    selected={this.props.selected}
                    moveTarget={this.props.moveTarget}
                />
            </div>
        )
    }
}

export default UpperPanel;