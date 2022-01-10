import React, { Component } from 'react'

export default class Contact extends Component {
   

    //local storage
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMsg = this.onChangeMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            msg: ''
        }
    }

    // Form Values
    onChangeName(e) {       
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeMsg(e) {
       
        this.setState({ msg: e.target.value })
    }
    
   

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
        localStorage.setItem('user', JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                 <div className="container">
                    <h1>contact</h1>
                    <div className="card p-5">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                        <div className="col-md-6">
                            <h4>First Name</h4>
                            <input type="text" className="form-control" id="First-Name" value={this.state.name} onChange={this.onChangeName} placeholder="First Name" name="First-Name"/>
                        </div>
                        <div className="col-md-6">
                            <h4>Email</h4>
                            <input type="text" className="form-control" id="email" value={this.state.email}  onChange={this.onChangeEmail} placeholder="Enter email" name="email"/>
                        </div>
                        <div className="col-md-12">
                            <h4>Message</h4>
                            <textarea className="form-control" rows="5" value={this.state.msg} onChange={this.onChangeMsg} id="Message"></textarea>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

