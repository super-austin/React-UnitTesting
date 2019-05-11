import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId: '',
            clientName:''
        };
    }

    getClientName(event) {
        this.setState({ clientId: event.target.value });
    }
    
    // axios full code
    makeApiCall = async () => {
        const id = this.state.clientId;
        try {
            let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data  = await result.data;
            this.setState({ clientName: data.name });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <form className='form-group'>
                <h3>{this.state.clientName}</h3>
                <fieldset className='form-group'>
                    <label className='form-label'>
                        customer id:
                    </label>
                    <input type="text" id="cid" className='form-input' value={this.state.clientId} onChange={(e) => this.getClientName(e)}/>
                </fieldset>
                <div className='form-group'>
                    <button id='formButtonAdd' className='btn' type="button" onClick={() => this.makeApiCall()}>Search</button>
                </div>
            </form>
        );
    }
}

export default Form;
