import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import DustbinSingleTarget from '../stories/Single Target'
import DustbinCopyOrMove from '../stories/Copy or Move'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 💯</Button>
  ))

storiesOf('React dnd', module)
  .add('Single Target', () => <DustbinSingleTarget />)
  .add('Copy or Move', () => <DustbinCopyOrMove />)
