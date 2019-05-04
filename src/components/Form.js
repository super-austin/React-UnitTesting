import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId: '',
            clientName:''
        };
        this.getClientName = this.getClientName.bind(this);
        this.makeApiCall = this.makeApiCall.bind(this);
    }

    getClientName(event) {
        this.setState({ clientId: event.target.value });
    }
    
    async makeApiCall () {
        const id = this.state.clientId;
        const clientName = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.data.name);
        this.setState({ clientName });
    }

    render() {
        return (
            <form className='form-group'>
                <h3>{this.state.clientName}</h3>
                <fieldset className='form-group'>
                    <label className='form-label'>
                        customer id:
                    </label>
                    <input type="text" id="cid" className='form-input' value={this.state.clientId} onChange={this.getClientName}/>
                </fieldset>
                <div className='form-group'>
                    <button id='formButtonAdd' className='btn' type="button" onClick={this.makeApiCall}>Search</button>
                </div>
            </form>
        );
    }
}

export default Form;
