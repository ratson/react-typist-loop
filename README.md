# react-typist-loop

Typing animations with React.

## Installation

```
npm install react-typist-loop --save
```

## Usage

<!-- eslint-disable no-unused-vars -->

```jsx
import React from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

const App = () => (
  <TypistLoop interval={3000}>
    {[
      'Hello World',
      'Good Morning',
      'Bye',
    ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
  </TypistLoop>
)
```
