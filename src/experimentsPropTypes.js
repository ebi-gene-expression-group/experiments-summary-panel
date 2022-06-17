import PropTypes from 'prop-types'

const experimentPropTypes = {
  experimentType: PropTypes.string.isRequired,
  experimentAccession: PropTypes.string.isRequired,
  experimentDescription: PropTypes.string.isRequired,
  numberOfAssays: PropTypes.number.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
}

export { experimentPropTypes }
