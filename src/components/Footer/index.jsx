import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  bottom: 0;
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
    <span style={{ height: '15px', lineHeight: '15px', verticalAlign: 'center' }}>
      Except where otherwise specified, the contents of this site are
      copyright John Colagioia and licensed under a <a
        rel="license noreferrer noopener"
        href="http://creativecommons.org/licenses/by-sa/4.0/"
      >
        Creative Commons Attribution-ShareAlike 4.0 International License
      </a>.
      &nbsp;
      <a
        href="http://creativecommons.org/licenses/by-sa/4.0/"
        rel="license noreferrer noopener"
        target="_blank"
      >
        <img
          alt="Creative Commons (Attribution, Share-Alike) License"
          style={{ borderWidth: 0, display: 'inline', padding: 0, verticalAlign: 'top' }}
          src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
        />
      </a>
    </span>
  </FooterWrapper>
);

export default Footer;
