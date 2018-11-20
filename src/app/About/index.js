import React, { Component } from "react";
import { Helmet } from "react-helmet";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About</title>
          <meta
            name="description"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
          <meta
            itemprop="image"
            content="https://allabouttheatre.org/wp-content/uploads/2018/03/Simba.jpg"
          />
          <meta property="og:title" content="About" />
          <meta
            property="og:image"
            content="https://allabouttheatre.org/wp-content/uploads/2018/03/Simba.jpg"
          />
          <meta
            property="og:description"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
          <meta name="twitter:title" content="About" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
          <meta
            name="twitter:image"
            content="https://allabouttheatre.org/wp-content/uploads/2018/03/Simba.jpg"
          />
        </Helmet>
        <div>About page</div>
      </React.Fragment>
    );
  }
}

export default About;
