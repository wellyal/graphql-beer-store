import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import ButtonDecrease from './ButtonDecrease'

storiesOf('ButtonDecrease', module)
  .add('default',
    withInfo('')(() =>
      <ButtonDecrease onClick={action('onClick')} />
    )
  )