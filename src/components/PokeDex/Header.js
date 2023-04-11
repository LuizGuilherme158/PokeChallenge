import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        marginBottom: '20px',
        marginRight: '0',
      }}
    >
      {/* BLUE LIGHT */}
      <div
        style={{ borderBottom: '4px solid black', padding: '0 0 20px 20px' }}
      >
        <div
          style={{
            border: '4px solid black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '999px',
            background: 'white',
            minWidth: '80px',
            minHeight: '80px',
          }}
        >
          <div
            style={{
              border: '4px solid black',
              borderRadius: '999px',
              background: 'var(--primary-light-color)',
              width: '64px',
              height: '64px',
            }}
          />
        </div>
      </div>

      {/* 40 DEG LINE */}
      <div
        style={{
          position: 'absolute',
          borderBottom: '4px solid black',
          width: '79px',
          rotate: '-40deg',
          left: '64px',
          top: '8px',
          height: '80px',
        }}
      />

      {/* THREE LITTLE LIGHTS */}
      <div
        style={{
          display: 'flex',
          marginLeft: '57px',
          marginTop: '10px',
          paddingBottom: '10px',
          height: 'min-content',
          width: '100%',
          borderBottom: '4px solid black',
        }}
      >
        {/* RED */}
        <div
          style={{
            border: '4px solid black',
            borderRadius: '999px',
            background: 'var(--secondary-light-color)',
            width: '30px',
            height: '30px',
          }}
        />
        {/* YELLOW */}
        <div
          style={{
            border: '4px solid black',
            borderRadius: '999px',
            background: 'var(--third-light-color)',
            width: '30px',
            height: '30px',
            marginLeft: '5px',
          }}
        />
        {/* GREEN */}
        <div
          style={{
            border: '4px solid black',
            borderRadius: '999px',
            background: 'var(--fourth-light-color)',
            width: '30px',
            height: '30px',
            marginLeft: '5px',
          }}
        />
      </div>
    </div>
  );
}
