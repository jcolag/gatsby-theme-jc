import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  padding: 10px 0;
  color: #000;
  background-color: #d5c48e;
  font-size: 11px;
  font-weight: 500;
  text-align: center;

  a {
    color: #000;
    font-weight: 700;
  }
`;

const Footer = () => (
  <FooterWrapper>
    Theme adapted from @
    <a
      href="https://github.com/wonism/gatsby-advanced-blog"
      target="_blank"
      rel="noreferrer noopener"
    >
      wonism
    </a>
  </FooterWrapper>
);

export default Footer;
