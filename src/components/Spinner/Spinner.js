import React from 'react'

import './Spinner.css';

const Spinner = () => {
    return <div className='Spinner'>
        <div className="lds-css ng-scope">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
};

export default Spinner;