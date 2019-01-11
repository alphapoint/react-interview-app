import React, {Component} from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import "../styles/user-form.css";

class UserFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    };
  }

  componentWillMount() {
    const {name, email} = this.props;
    this.setState({
      name: name || '',
      email: email || ''
    });
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState({name});
  };

  onEmailChange = e => {
    const email = e.target.value;
    this.setState({email});
  };

  onFormSubmit = () => {
    const {updateUserForm} = this.props;
    const {name, email} = this.state;
    debugger;
    updateUserForm({name, email});
  };

  render() {
    const {name, email} = this.state;
    return (
      <div className="user-form">

        <FormControl className="user-form__input">
          <InputLabel htmlFor="name-input">
            Name
          </InputLabel>
          <Input
            value={name}
            id="name-input"
            onChange={this.onNameChange} />
        </FormControl>

        <FormControl className="user-form__input">
          <InputLabel htmlFor="email-input">
            Email
          </InputLabel>
          <Input
            value={email}
            id="email-input"
            onChange={this.onEmailChange} />
        </FormControl>

        <Button variant="contained"
                color="primary"
                className="user-form__input"
                onClick={this.onFormSubmit}>
          Submit
        </Button>

      </div>
    );
  }
}

export default UserFormComponent;
