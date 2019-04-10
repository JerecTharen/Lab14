import React from 'react';

import SearchResultsRow from './SearchResultsRow';

class SearchTable extends React.Component{

    houseRows = this.props.filteredHouses.map(h =>
        <SearchResultsRow key={h.id.toString()} house={h}
            setActiveHouse={this.props.setActiveHouse} />);

    render() {
        return(
            <div className='mt-2'>
                <h4>Results for {this.props.country}:</h4>
                <table className='table table-hover'>
                    <tbody>
                    {this.houseRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchTable;
