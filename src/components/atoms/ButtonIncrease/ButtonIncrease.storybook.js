import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import ButtonIncrease from './ButtonIncrease'

storiesOf('ButtonIncrease', module)
  .add('default',
    withInfo('')(() =>
      <ButtonIncrease onClick={action('onClick')} />
    )
  )