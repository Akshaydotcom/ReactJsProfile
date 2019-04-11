import React from "react";

export class Root extends React.Component{
    
    render(){
        return(
            <div className="container">
                <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>           
                </div>
                <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {this.props.children}
                </div>
                    {/* <Home/>
                    <AboutMe name={"Akshay"} age={22} experience={0.8} user={user}/>
                    <ProjectInfo projectname={projectname}/>
                     */}
                </div>
            </div>
        </div>
        );
    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     initialAge: React.PropTypes.number,
//     experience: React.PropTypes.number,
//     skills: React.PropTypes.object
// };