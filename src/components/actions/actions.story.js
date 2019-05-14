'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Actions from './index'

storiesOf('Action Component', module)
  .add('first story', () => (
    <Actions
      getRepos={action('getRepos')}
      getStarred={action('getStarred')}
    />
  ))
