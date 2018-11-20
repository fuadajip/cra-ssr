import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home page" />
        </Helmet>
        <div>Home page</div>
      </React.Fragment>
    );
  }
}

export default Home;
