import React, { Component } from 'react';
// import profile.css from './profile.css;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {},
        }
    }

    // The componentDidMount() method runs after the component output has been rendered to the DOM
    componentDidMount() {
        fetch(this.props.url, {credentials: 'include'})
          .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
          })
          .then((data) => {
            this.setState({
               personalInfo: data,
            });
          });
    }
}

export default Profile