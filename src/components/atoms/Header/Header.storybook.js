import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'

import Header from './Header'

storiesOf('Header')
  .addDecorator(centered)
  .addWithInfo(
    'header1',
    () => <Header className="h1">Header1</Header>
  )
  .addWithInfo(
    'header2',
    () => <Header className="h2">Header2</Header>
  )
  .addWithInfo(
    'header3',
    () => <Header className="h3">Header3</Header>
  )
  .addWithInfo(
    'header4',
    () => <Header className="h4">Header4</Header>
  )
  .addWithInfo(
    'header5',
    () => <Header className="h5">Header5</Header>
  )