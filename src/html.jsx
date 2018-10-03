import React, { Component } from 'react';

let stylesStr;
if (JSON.stringify(process.env.NODE_ENV) === 'production') {
  try {
    stylesStr = require('!raw-loader!./components/Layout/index.css');
  } catch (e) {
    console.error(e);
  }
}

export default class HTML extends Component {
  render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents,
    } = this.props;

    return (
      <html {...htmlAttributes} lang="en">
        <head>
          {headComponents}
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
          <meta httpEquiv="Access-Control-Allow-Headers" content="*" />
          <meta httpEquiv="Access-Control-Expose-Headers" content="*" />
          <meta httpEquiv="Access-Control-Allow-Credentials" content="true" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta id="viewport" name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1" />
          <meta name="description" content="John Colagioia's Blog" />
          <meta name="keywords" content="blog, john, colagioia" />
          <meta name="author" content="jcolag" />
          <meta property="og:title" content="John Colagioia's Blog" />
          <meta property="og:site_name" content="Entropy Arbitrage" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="" /> */}
          {/* <meta property="og:image" content="" /> */}
          <meta property="og:description" content="John Colagioia's Blog" />
          <meta property="og:locale" content="en_US" />
          {/* <meta name="msapplication-TileImage" content="" /> */}
          {/* <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="" /> */}
          {/* <link rel="apple-touch-icon" type="image/vnd.microsoft.icon" href="" /> */}
          {JSON.stringify(process.env.NODE_ENV) === 'production' ? (
            <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
          ) : null}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
