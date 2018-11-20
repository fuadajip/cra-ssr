import React, { Component } from "react";
import { Helmet } from "react-helmet";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About page" />
        </Helmet>
        <div>About page</div>
      </React.Fragment>
    );
  }
}

export default About;
