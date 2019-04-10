import React from 'react';
import './House.css';
import Inquiry from './Inquiry';
import emailIcon from './Email.png';

class House extends React.Component{

    state = {
        inquiryShown: false,
    };

    inquiryToggle = ()=>{
        this.setState({inquiryShown: !this.state.inquiryShown});
    };

    house = this.props.house;

    render() {
        let showForm;
        if(this.state.inquiryShown){
            showForm = <Inquiry />
        }
        else{
            showForm = null;
        }
        return(
            <div>
                <div className='row mt-2'>
                    <h5 className='col-md-12'>{this.house.country}</h5>
                </div>
                <div className='row'>
                    <h3 className='col-md-12'>{this.house.address}</h3>
                </div>
                <div className='row'>
                    <div className='col-md-7'>
                        <img src={`https://images.pexels.com/photos/${this.house.photo}/pexels-photo-${this.house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House" />
                    </div>
                    <div className='col-md-5'>
                        <p className='price'>{this.house.price}</p>
                        <p>{this.house.description}</p>
                        <img id='emailIcon' src={emailIcon} alt='emailIcon' onClick={this.inquiryToggle} />
                        {showForm}
                    </div>
                </div>
            </div>
        )
    }
}

export default House;
