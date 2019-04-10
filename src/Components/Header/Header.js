import React from 'react';
import logo from './GloboLogo.png';

class Header extends React.Component{
    render() {
        return(
            <header className='row'>
                <div className='col-md-5'>
                    <img className='logo' src={logo} alt='logo' />
                </div>
                <div className='col-md-7 mt-5 subtitle'>
                    {this.props.subtitle}
                </div>
            </header>
        )
    }
}

export default Header;
