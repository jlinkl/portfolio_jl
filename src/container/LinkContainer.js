import React from "react";
import SocialLinks from "../component/SocialLinks";
import styled from "styled-components";

const LinkContainer = () => {
  const Div = styled.div`
    display: inline-flex;
    vertical-align: baseline;
    position: relative;
  `;

  const H1 = styled.h1`
    display: inline;
    vertical-align: baseline;
  `;

  const Div2 = styled.div`
  display: inline-flex;
  position: absolute;
  right: 0px;
  top: 29px;
  `


  return (
    <>
      <Div>
        <H1>James Linklater: Software Engineer (in training)</H1>
      </Div>
      <Div2>
        <SocialLinks />
      </Div2>

    </>
  );
};

export default LinkContainer;
