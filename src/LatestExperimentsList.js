import React from 'react'
import PropTypes from 'prop-types'

import LatestExperimentEntry from './LatestExperimentEntry'
import { experimentPropTypes } from './experimentsPropTypes'

function LatestExperimentsList ({ experiments, host }) {
  return (
    <ul style={{ listStyle: `none`, marginLeft: `offset` }}>
      {
        Array.isArray(experiments) &&
        experiments.map((experiment, idx) =>
          <li key={idx}>
            <LatestExperimentEntry host={host} {...experiment}/>
          </li>
        )
      }
    </ul>
  )
}

LatestExperimentsList.propTypes = {
  experiments: PropTypes.arrayOf(PropTypes.shape(experimentPropTypes)).isRequired,
  host: PropTypes.string.isRequired
}

export default LatestExperimentsList
