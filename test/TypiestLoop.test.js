import React from 'react'
import Typist from 'react-typist'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import test from 'ava'

import TypistLoop from '../src/TypistLoop'

configure({ adapter: new Adapter() })

test(t => {
  const App = () => (
    <TypistLoop interval={3000}>
      {['Hello World', 'Good Morning', 'Bye'].map(text => (
        <Typist key={text} startDelay={1000}>
          {text}
        </Typist>
      ))}
    </TypistLoop>
  )

  const app = shallow(<App />)
  t.is(
    app.html(),
    '<div class="Typist "><span class="Cursor Cursor--blinking">|</span></div>',
  )
})
