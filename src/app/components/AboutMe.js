import React from "react";

export class AboutMe extends React.Component{
    
    constructor(props){
        super();
        this.state={
            age: props.initialAge,
            emailstatus: 0,
            phonestatus: 0
        };
    }
    onEmailCall(){
        this.setState({
            emailstatus:1
        });
    }
    onPhoneCall(){
        this.setState({
            phonestatus:1
        });
    }
    render(){
        let emailID= "";
        let phonenumber="";
        if(this.state.emailstatus===1){
            emailID=(<p>
            Email: akshaybhandaryg1@gmail.com
        </p>);
        if(this.state.phonestatus===1){
            phonenumber=( <p>
                Phone: +(91)9789076614
            </p>);
        }
        }
        return(
            <div className="container">
                <p>

                </p>
                <div className="col-xs-10 col-xs-offset-1">
                <h4 className="Header4"></h4>
                <div style={{ backgroundColor:'LightBlue','fontFamily': 'Times New Roman, Times, serif',  'fontSize': 'large'}}>
                    <p>
                    Hi, My Name is {this.props.name}, and I am {this.state.age} years old.
                    I like to code, which might be obvious, and I like learning new things.
                    As a kid, I was the most innocent-looking, quiet kid who didn't trouble his parents a lot. That all changed when I grew up however. I was always the one who asked unnecessary questions about anything and everything.  
                    I did my graduation from SRM University, (Don't worry if you haven't heard of it before...neither did I before I got in :P) and got a job in Infosys. In SRM, I learnt a lot, including but not limited to bunking classes, mark proxies for others, 
                    and a little bit of coding. But the most important thing I learnt and experienced there has to be communication. Communication with anyone, irrespective of age, gender, background etc. That is why I can say without a shadow of a doubt, I can handle any situation which is thrown my way satisfactorily. 
                    After all, if one can navigate the confusing life in a college filled with tens of thousands of students, one can handle a few client meetings with ease.
                    </p>
                    <img  id="image1" src="src\app\Images\IMG_1823.jpg" width="75%" height="500px" style={{ position: 'relative', left: '5%'}}/>
                    <br/>
                    <p>
                    That's me during my College days. As you can see, I am rocking an Iron-Man T-shirt, which is just another testament to the fact that I love comics and superheroes a lot. 
                    I guess that's because I believe that humans have unlimited potential and the things superheroes do in movies could one day be done by normal people like me. 
                    That gives me hope, hope that we are all meant for something much bigger than ourselves.
                    </p>
                    <hr/>
                </div>
                <div className="bodyDivafterImage">
                <p>    One could say that I follow Murphy's Law:  <b><i>"Anything that can go wrong will go wrong."</i></b></p>
                    I have an experience of {this.props.experience} years.
                    My Skills are:
                    <div className="skillsdiv">
                        <ul>
                            {this.props.user.skills.map((skill, i)=> <li key={i}>{skill}</li>)}
                        </ul>
                    </div>
                    <span>To Contact me by Email: <button onClick={this.onEmailCall.bind(this)} className="btn btn-primary">Click here</button></span>
                    {emailID}
                    <span>To Contact me by Phone: <button onClick={this.onPhoneCall.bind(this)} className="btn btn-primary">Click here</button></span>
                   {phonenumber}
                   
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
