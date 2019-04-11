import React from "react";

export class ProjectInfo extends React.Component{
    constructor(props){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="container">
                <div className="col-xs-10 col-xs-offset-1">
                <h4>Projects</h4>
                <span>These are the projects I have worked on in my career in Infosys: </span>
                <div>
                    <ul><li>{this.props.projectname.title}</li>
                    <div>
                        This project entitled the use of the following technologies:
                        <ul>
                            {this.props.projectname.tech_used.map((tech,i)=><li key={i}>{tech}</li>)}
                        </ul>
                    </div>
                    <div>
                        I also performed these additional tasks that were beyond what was expected from me as a fresher:
                        <ul>
                            {this.props.projectname.additional_tasks.map((task,i)=><li key={i}>{task}</li>)}
                        </ul>
                    </div></ul>
                </div>
                </div>
            </div>
        );
    }
}