import React from 'react';
class LogIn extends React.Component {

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return (
            <div>
                <form className="loginForm">
                    {/* <img className="logInImg" alt="" src={""}/> */}
                    <input name="username" type="text" name="username" placeholder="Username" onChange={this.changeHandler} />
                    <input name="password" type="text" name="password" placeholder="Password" onChange={this.changeHandler} />
                    <button className="logInButton" type="submit">Log In</button>   
                </form>
            </div>
        );
    }

}

export default LogIn;