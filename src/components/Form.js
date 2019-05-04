import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId: ''
        };
        this.getClientName = this.getClientName.bind(this);
        this.makeApiCall = this.makeApiCall.bind(this);
    }

    getClientName(event) {
        this.setState({ clientId: event.target.value });
    }
    
    makeApiCall () {
      axios.get("https://jsonplaceholder.typicode.com/users/"+this.state.clientId).then(res => this.disp(res.data.name));
    }

    disp(p){
        alert(p)
    }
    render() {
        return (

            <form className='form-group'>
                <fieldset className='form-group'>
                    <label className='form-label'>
                        customer id:
                    </label>
                    <input type="text" id="number1" className='form-input' value={this.state.clientId} onChange={this.getClientName}/>
                </fieldset>
                <div className='form-group'>
                    <button id='formButtonAdd' className='btn' type="button" onClick={this.makeApiCall}>Search</button>
                </div>
            </form>
        );
    }
}

export default Form;
