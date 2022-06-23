import React from 'react';
import './card.scss';

export default function Card(props: any) {
  return <div className="card">{props.children}</div>;
}
