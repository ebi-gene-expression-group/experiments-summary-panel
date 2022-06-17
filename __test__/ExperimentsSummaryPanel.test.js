import React from 'react'
import renderer from 'react-test-renderer'

import { bulkExperiments, singleCellExperiments, buildFeaturedExperimentsCards } from './TestUtils'

import ExperimentsSummaryPanel from '../src/ExperimentsSummaryPanel'

describe(`ExperimentsSummaryPanel`, () => {
  test(`matches snapshot for bulk experiments with featured experiments`, () => {
    const tree = renderer
      .create(<ExperimentsSummaryPanel
        host={`https://www.ebi.ac.uk/gxa/`}
        featuredExperiments={buildFeaturedExperimentsCards(`https://www.ebi.ac.uk/gxa/`)}
        latestExperiments={bulkExperiments}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`matches snapshot for single cell experiments without featured experiments`, () => {
    const tree = renderer
      .create(<ExperimentsSummaryPanel
        host={`https://www.ebi.ac.uk/gxa/`}
        featuredExperiments={[]}
        latestExperiments={singleCellExperiments}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
