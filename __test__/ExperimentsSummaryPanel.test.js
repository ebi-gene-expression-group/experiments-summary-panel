import { mount } from 'enzyme'

import { bulkExperiments, singleCellExperiments, buildFeaturedExperimentsCards } from './TestUtils'

import ExperimentsSummaryPanel from '../src/ExperimentsSummaryPanel'

describe(`ExperimentsSummaryPanel`, () => {
  test(`matches snapshot for bulk experiments with featured experiments`, () => {
    expect(
      mount(
        <ExperimentsSummaryPanel
          host={`https://www.ebi.ac.uk/gxa/`}
          featuredExperiments={buildFeaturedExperimentsCards(`https://www.ebi.ac.uk/gxa/`)}
          latestExperiments={bulkExperiments}
        />)).toMatchSnapshot()
  })

  test(`matches snapshot for single cell experiments without featured experiments`, () => {
    expect(
      mount(
        <ExperimentsSummaryPanel
          host={`https://www.ebi.ac.uk/gxa/`}
          featuredExperiments={[]}
          latestExperiments={singleCellExperiments}
        />)).toMatchSnapshot()
  })
})
