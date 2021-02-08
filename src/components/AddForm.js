import React from 'react';
import { connect } from 'react-redux';
import { pushSmurfs } from '../actions/';


class AddForm extends React.Component {

    state = {
            name: '',
            position: '',
            nickname: '',
            description: ''        
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state, [event.target.name]: event.target.value //using (this) because its a class component
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newSmurf = {
            name: this.state.name,
            position: this.state.position,
            nickname: this.state.nickname,
            description: this.state.description
        }
        this.props.pushSmurfs(newSmurf);
        event.target.reset();
    }

    render() {
        // console.log(pushSmurfs())
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <textarea onChange={this.handleChange} name="description" id="description" />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error}</div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => { // giving AddForm the current state
    return{
        smurfs: state.smurfs,
        error: state.error,
        isPosting: state.isPosting
    }
}

export default connect(mapStateToProps,{pushSmurfs})(AddForm); //connecting component with higher order component

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.