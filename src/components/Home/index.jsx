import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { flow, slice, map, includes, get, size, isEmpty, isArray, first } from 'lodash/fp';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';
import './index.css';
import * as backgroundUrl from '~/resources/sunrise-xp.png';

const Title = styled.h1`
  background-color: transparent;
  background-image: url(${backgroundUrl.default});
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 3em;
  line-height: 1.5em;
  color: #6e3c29;
  font-size: 32px;
  font-size: 8vw;
  font-family: 'Vollkorn';
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 0.85em
  white-space: nowrap;
`;

const Home = ({ portfolios }) => (
  <Fragment>
    <Wrapper isHome>
      <Title>
        Entropy Arbitrage
      </Title>
      <Helmet>
        <title>
          Entropy Arbitrage: John Colagioia's Blog
        </title>
        <meta name="og:title" content="John Colagioia's Blog" />
      </Helmet>
    </Wrapper>
    {size(portfolios) >= 4 ? (
      <SimpleWrapper>
        {flow(
          slice(0, 4),
          map((edge) => {
            const portfolio = get('node.frontmatter')(edge);
            const { path, title, images } = portfolio;
            const image = isArray(images) ? first(images) : null;

            if (!isEmpty(image)) {
              return (
                <PortfolioCard key={path}>
                  <Link to={path}>
                    {includes('//')(image) ? (
                      <img src={image} alt="portfolio" />
                    ) : (
                      <img src={require(`~/resources/${image}`)} alt="portfolio" />
                    )}
                    <h6>
                      {title}
                    </h6>
                  </Link>
                </PortfolioCard>
              );
            }

            return (
              <PortfolioCard key={path}>
                <Link to={path}>
                  <h4>
                    {title}
                  </h4>
                </Link>
              </PortfolioCard>
            );
          })
        )(portfolios)}
      </SimpleWrapper>
    ) : null}
  </Fragment>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
