import React from 'react';

export default function Hamburguer() {
  const returnHamburguerLine = () => {
    return (
      <div
        style={{
          width: '35px',
          height: '5px',
          backgroundColor: 'black',
          margin: '6px 0',
        }}
      />
    );
  };

  return <div>{[...Array(4)].map((_, index) => returnHamburguerLine())}</div>;
}
