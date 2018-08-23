import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

const Wrapper = SimpleWrapper.extend`
  padding: 100px 0 0;
  min-height: 100vh;
  text-align: center;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  h1 {
    margin: 0 0 .67em;
    font-size: 24px;
  }

  a {
    text-decoration: underline;
  }
`;

const NotFoundPage = () => (
  <Wrapper>
    <Helmet>
      <title>
        Entropy Arbitrage | Page Not Found
      </title>
      <meta name="og:title" content="Entropy Arbitrage | Page Not Found" />
    </Helmet>
    <h1>
      There was too much entropy for that page to exist, I guess.  If it
      was my fault, from reorganizing things, I'm very sorry.  But just
      in case, double-check the spelling in the address or head back to
      the front page.
    </h1>
    <Link to="/">
      ← Go Home
    </Link>
  </Wrapper>
);

export default NotFoundPage;
