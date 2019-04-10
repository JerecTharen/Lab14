import React from 'react';

import House from './House';

class FeaturedHouse extends React.Component{
    render() {
        if(this.props.house) return(
            <div>
                <div className='row featuredHouse'>
                    <h3 className='col-md-12 text-center'>Featured House</h3>
                </div>
                <House house={this.props.house} />
            </div>
        );
        return(<div>No featured house at this time</div>)
    }
}

export default FeaturedHouse;
