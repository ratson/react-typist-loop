import React from 'react'
import Typist from 'react-typist'

import { shallow } from 'enzyme'
import test from 'ava'

import TypistLoop from '../src/TypistLoop'

test(t => {
  const App = () =>
    <TypistLoop interval={3000}>
      {['Hello World', 'Good Morning', 'Bye'].map(text =>
        <Typist key={text} startDelay={1000}>
          {text}
        </Typist>,
      )}
    </TypistLoop>

  const app = shallow(<App />)
  t.is(
    app.html(),
    '<span><div class="Typist "><span class="Cursor Cursor--blinking">|</span></div></span>',
  )
})
