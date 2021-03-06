import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <meta
            itemprop="image"
            content="https://upload.wikimedia.org/wikipedia/en/c/cf/YoungSimbaSmilestlk.png"
          />
          <meta property="og:title" content="Home" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:image"
            content="https://upload.wikimedia.org/wikipedia/en/c/cf/YoungSimbaSmilestlk.png"
          />
          <meta
            property="og:description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <meta name="twitter:title" content="Home" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <meta
            name="twitter:image"
            content="https://upload.wikimedia.org/wikipedia/en/c/cf/YoungSimbaSmilestlk.png"
          />
        </Helmet>
        <div>Home page</div>
      </React.Fragment>
    );
  }
}

export default Home;
