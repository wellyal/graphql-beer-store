import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'

import Input from './Input'

storiesOf('Input')
  .addDecorator(centered)
  .addWithInfo(
    'default',
    () => <Input type="text"
            id="address"
            label="Address"
            type="text"
            required
          />
  )