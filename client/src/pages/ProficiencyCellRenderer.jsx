import React from 'react';

// cell renderer for the proficiency column. this is a very basic cell renderer,
// it is arguable that we should not of used React and just returned a string of
// html as a normal ag-Grid cellRenderer.
export default class ProficiencyCellRenderer extends React.Component {

    render() {
        let backgroundColor;
        if (this.props.value < 50) {
            backgroundColor = 'red';
        } else if (this.props.value < 99) {
            backgroundColor = '#ff9900';
        } else {
            backgroundColor = '#00A000';
        }

        return (
            <div className="div-percent-bar" style={{width: this.props.value + '%', backgroundColor: backgroundColor}}>
                <div className="div-percent-value">{this.props.value}</div>
            </div>
        );
    }
}