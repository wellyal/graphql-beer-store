import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Topbar from './Topbar'

storiesOf('Topbar', module)
  .addWithInfo(
    'default',
    () => <Topbar />
  )