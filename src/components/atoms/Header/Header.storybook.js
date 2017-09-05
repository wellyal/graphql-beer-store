import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'

import Header from './Header'

storiesOf('Header')
  .addDecorator(centered)
  .addWithInfo(
    'header1',
    () => <Header className="header h1">Header1</Header>
  )
  .addWithInfo(
    'header2',
    () => <Header className="header h2">Header2</Header>
  )
  .addWithInfo(
    'header3',
    () => <Header className="header h3">Header3</Header>
  )
  .addWithInfo(
    'header4',
    () => <Header className="header h4">Header4</Header>
  )
  .addWithInfo(
    'header5',
    () => <Header className="header h5">Header5</Header>
  )