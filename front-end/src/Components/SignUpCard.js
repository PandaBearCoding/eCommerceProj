import React from 'react';

class SignUp extends React.Component {
    state = {
        username: "",
        password: "",
        name: "",
        profile_picture: "",
        phone_number: "",
        email: "",
        address: "",
        cc_number: "",
        cc_date: "",
        cc_cvv: "", 
    }


    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.newUserSubmitHandler(this.state)
        this.setState({username: "", password: "", name: "", profile_picture: "", phone_number: "", email: "", address: "", cc_number: "", cc_date: "", cc_cvv: ""})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                {/* <img className="logInImg" alt="" src={""}/> */}
                <form className="signUpForm" onSubmit={this.localSubmitHandler}>
                    <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                    <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
                    <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler} />
                    <input name="profile_picture" type="text" placeholder="profile picture" value={this.state.profile_picture} onChange={this.changeHandler} />
                    <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.changeHandler} />
                    <input name="email" type= "text" placeholder="email" value={this.state.postcode} onChange={this.changeHandler} />
                    <input name="cc_number" type="text" placeholder="cc number" value={this.state.cc_number} onChange={this.changeHandler} />
                    <input name="cc_date" type="text" placeholder="cc expiration date" value={this.state.cc_date} onChange={this.changeHandler} />
                    <input name="cc_cvv" type="text" placeholder="cc CVV" value={this.state.cc_cvv} onChange={this.changeHandler} />
                    <button lassName="signUpButton">Create Profile</button>
                </form>
            </div>
        )
    }

}

export default SignUp;