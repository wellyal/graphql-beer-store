import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Header from './Header'

storiesOf('Header', module)
  .add('header1',
    withInfo('')(() =>
      <Header className="header h1">Header1</Header>
    )
  )
  .add('header2',
    withInfo('')(() =>
      <Header className="header h2">Header2</Header>
    )
  )
  .add('header3',
    withInfo('')(() =>
      <Header className="header h3">Header3</Header>
    )
  )
  .add('header4',
    withInfo('')(() =>
      <Header className="header h4">Header4</Header>
    )
  )
  .add('header5',
    withInfo('')(() =>
      <Header className="header h5">Header5</Header>
    )
  )