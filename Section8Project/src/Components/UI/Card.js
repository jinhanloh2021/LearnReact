import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

export default function Card(props) {
  return <CardDiv className={`${props.className}`}>{props.children}</CardDiv>;
}
