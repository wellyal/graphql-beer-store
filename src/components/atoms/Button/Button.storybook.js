import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withInfo } from '@storybook/addon-info'

import Button from './Button'

storiesOf('Button', module)
  .addDecorator(centered)
  .add('primary',
    withInfo('')(() =>
      <Button onClick={action('onClick')} className="btn primary">Submit</Button>
    )
  )
  .add('secondary',
    withInfo('')(() =>
     <Button onClick={action('onClick')} className="btn secondary">Submit</Button>
    )
  )