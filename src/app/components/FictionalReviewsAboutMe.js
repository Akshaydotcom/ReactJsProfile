import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
export class FictionalReviewsAboutMe extends React.Component{
    ProgressBarClick(){
        alert("Only 10% is Completed, Please for the love of god stop bugging me");
    };
    
    render(){
        return(
            <div className="container-fluid">
                This feature will be completed in the next 3 Days.
                Check the below space for more Updates
                <ProgressBar now={10} onClick={this.ProgressBarClick}/>
            </div>
        );
    };
}