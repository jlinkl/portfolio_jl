import React from "react";
import styled from "styled-components";
import {FaTwitter, FaGithub} from 'react-icons/fa'

const SocialLinks = () => {
  const Button = styled.button`
    width: 32px;
    height: 32px;
    padding: 0px;
    border: none;
    outline: none;
    background: none;
  `;

  const Div = styled.div`
  display: inline-flex;  
  vertical-align: baseline
  position: absolute;
  float: right;
  `

  const A = styled.a`
  padding-right: 10px;
  vertical-align: baseline;
  `

  return (
      <Div>

        <A
          href="https://twitter.com/skaryton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="button">
            <FaTwitter size="2em"/>
          </Button>
        </A>

        <A
          href="https://github.com/jlinkl?tab=repositories"
          target="_blank"
          rel="noopener npreferrer"
        >
          <Button type="button">
            <FaGithub size="2em"/>
          </Button>
        </A>

      </Div>
  );
};

export default SocialLinks;
