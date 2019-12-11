import React from 'react'
import PropTypes from 'prop-types'

import ResponsiveCardsRow from '@ebi-gene-expression-group/atlas-homepage-cards'
import LatestExperimentsList from './LatestExperimentsList'


class SpeciesSummaryPanel extends React.Component {
  render() {
    const { host, latestExperiments, featuredExperiments, responsiveCardsRowProps, tabsId } = this.props

    return(
      [
        <ul key={`tabs`} className={`tabs`} data-tabs id={tabsId}>
          {
            [
              featuredExperiments.length ?
                <li key={`featured`} className={`tabs-title is-active`} style={{textTransform: `capitalize`}}>
                  <a href={`#featured`}>Featured experiments</a>
                </li> :
                null,
              <li key={`latest`} className={`tabs-title${featuredExperiments.length ? `` : ` is-active`}`} style={{textTransform: `capitalize`}}>
                <a href={`#latest`}>Latest experiments</a>
              </li>
            ]
          }
        </ul>,
        featuredExperiments.length ?
          <div key={`tabs-content-featured`} className={`tabs-content`} data-tabs-content={tabsId}>
            {
              <div className={`tabs-panel is-active`} id={`featured`}>
                <ResponsiveCardsRow
                  cards={featuredExperiments}
                  {...responsiveCardsRowProps}
                />
              </div>
            }
          </div> :
          null,
        <div key={`tabs-content-latest`} className={`tabs-content`} data-tabs-content={tabsId}>
          {
            <div className={`tabs-panel${featuredExperiments.length ? `` : ` is-active`}`} id={`latest`}>
              <LatestExperimentsList
                experiments={latestExperiments}
                host={host}
              />
            </div>
          }
        </div>
      ]
    )
  }

  // Since the tabs need $().foundation() to function properly, we provide an optional callback to be run on the
  // target DOM node once the component has been initially rendered
  componentDidMount() {
    this.props.onComponentDidMount()
  }
}

SpeciesSummaryPanel.propTypes = {
  host: PropTypes.string.isRequired,
  featuredExperiments: ResponsiveCardsRow.propTypes.cards,
  latestExperiments: PropTypes.arrayOf(PropTypes.shape({
    experimentType: PropTypes.string.isRequired,
    experimentAccession: PropTypes.string.isRequired,
    experimentDescription: PropTypes.string.isRequired,
    numberOfAssays: PropTypes.number.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  })).isRequired,
  onComponentDidMount: PropTypes.func,
  responsiveCardsRowProps: PropTypes.object,
  tabsId: PropTypes.string,
}

SpeciesSummaryPanel.defaultProps = {
  onComponentDidMount: () => {},
  responsiveCardsRowProps: {},
  tabsId: `experiments-summary-tabs`
}

export default SpeciesSummaryPanel
