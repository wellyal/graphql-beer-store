import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './Input'

storiesOf('Input')
  .addWithInfo(
    'default',
    () => <Input type="text"
            id="address"
            label="Address"
            type="text"
            required
          />
  )