import React from 'react'
import PropTypes from 'prop-types'

import LatestExperimentEntry from './LatestExperimentEntry'

const LatestExperimentsList = ({experiments, host}) =>
  <ul style={{listStyle: `none`, marginLeft: `offset`}}>
    {
      Array.isArray(experiments) &&
      experiments.map((experiment, idx) =>
        <li key={idx}>
          <LatestExperimentEntry host={host} {...experiment}/>
        </li>
      )
    }
  </ul>

LatestExperimentsList.propTypes = {
  experiments: PropTypes.arrayOf(PropTypes.shape({
    experimentType: PropTypes.string.isRequired,
    experimentAccession: PropTypes.string.isRequired,
    experimentDescription: PropTypes.string.isRequired,
    numberOfAssays: PropTypes.number.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  })).isRequired,
  host: PropTypes.string.isRequired
}

export default LatestExperimentsList
