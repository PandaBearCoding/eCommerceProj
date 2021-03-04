import React from 'react';
class LogIn extends React.Component {

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return (
            <div>
                <div>
                    <form>
                        <div>
                            {/* <img className="logInImg" alt="" src={""}/> */}
                            <input className="logInInput" type="username" name="username" placeholder="Username" onChange={this.changeHandler} />
                            <input className="logInInput" type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
                            <button className="logInButton" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default LogIn;