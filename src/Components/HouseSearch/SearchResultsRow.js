import React from 'react';

class SearchResultsRow extends React.Component{

    setActive = (e) => {
        e.preventDefault();
        this.props.setActiveHouse(this.props.house);
    };

    render() {
        return(
            <tr onClick={this.setActive}>
                <td>{this.props.house.address}</td>
                <td>{this.props.house.price}</td>
                <td>{this.props.house.likes}</td>
            </tr>
        )
    }
}

export default SearchResultsRow;
