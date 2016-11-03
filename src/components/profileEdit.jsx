"use strict";

// Renders profile editing form, updates state on
// profileEditDialog component from user input on form

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MyTheme from '../theme/theme.js';

class ProfileEdit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      switch: false
    };
  }

// Grabs value from form, updates state of profileEditDialog
  handleChange(prop, event) {
    console.log('prop', prop);
    console.log('onChange Value', this.props.profile);
    if(prop === 'rentDog'){
      this.props.profile[prop] = !this.state.switch;
    } else {
      this.props.profile[prop] = event.target.value;
    }

    this.props.change(this.props.profile);
  };

  handleSwitchChange() {
    this.setState({switch: !this.state.switch});
  };


  render () {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(MyTheme)}>
          <div>
          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            value = {this.props.profile.firstname}
            onChange = {this.handleChange.bind(this, 'firstname')}
            name = "firstname"
            errorText = {this.props.error.firstname}
          /><br />
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            value = {this.props.profile.lastname}
            onChange = {this.handleChange.bind(this, 'lastname')}
            name = "lastname"
            errorText = {this.props.error.lastname}
          /><br />
          <TextField
            hintText="Location"
            floatingLabelText="Location"
            value = {this.props.profile.loc}
            onChange = {this.handleChange.bind(this, 'loc')}
            name = "loc"
            errorText = {this.props.error.loc}
          /><br />
          <TextField
            hintText="Your Profile Pic"
            floatingLabelText="Your Profile Pic"
            value = {this.props.profile.profilepic}
            onChange = {this.handleChange.bind(this, 'profilepic')}
            name = "profilepic"
            errorText = {this.props.error.picLink}
          /><br />
          <TextField
            hintText="Dog Name"
            floatingLabelText="Dog Name"
            value = {this.props.profile.dogname}
            onChange = {this.handleChange.bind(this, 'dogname')}
            name = "dogname"
            errorText = {this.props.error.dogname}
          /><br />
          <TextField
            hintText="Dog Breed"
            floatingLabelText="Dog Breed"
            value = {this.props.profile.dogBreed}
            onChange = {this.handleChange.bind(this, 'dogBreed')}
            name = "dogBreed"
            errorText = {this.props.error.dogBreed}
          /><br />
          <TextField
            hintText="Dog Age"
            floatingLabelText="Dog Age"
            value = {this.props.profile.dogAge}
            onChange = {this.handleChange.bind(this, 'dogAge')}
            name = "dogAge"
            errorText = {this.props.error.dogAge}
          /><br />
          <TextField
            hintText="Dog Profile Pic"
            floatingLabelText="Dog Profile Pic"
            value = {this.props.profile.picLink}
            onChange = {this.handleChange.bind(this, 'picLink')}
            name = "picLink"
            errorText = {this.props.error.picLink}
          /><br />
          <Toggle
            label="Rent-My-Dog"
            onClick = {this.handleSwitchChange.bind(this)}
            toggled = {this.state.switch}
            onToggle = {this.handleChange.bind(this, 'rentDog')}
            name = "rentDog"
            labelPosition="right"
          />
          {this.props.profile.rentDog ? 'On' : 'Off'}
        </div>
      </MuiThemeProvider>
    )
  }

}

//onClick = {this.handleSwitchChange.bind(this)}


module.exports = ProfileEdit;