import React from "react";
import Filter from "./Filter";
import SelectedColors from "./SelectedColors";

class UpperPanel extends React.Component {
    render() {
        return (
            <div className="flex_row upper_panel">
                <Filter 
                    origin={this.props.origin}
                    findMatches={this.props.findMatches}
                    clearFiltered={this.props.clearFiltered}
                />
                <SelectedColors 
                    selected={this.props.selected}
                    moveTarget={this.props.moveTarget}
                />
            </div>
        )
    }
}

export default UpperPanel;