import React from 'react'
import renderer from 'react-test-renderer'

import { bulkExperiments, singleCellExperiments } from './TestUtils'

import LatestExperimentsList from '../src/LatestExperimentsList'

describe(`LatestExperimentsList`, () => {
  test.each([
    [`latest bulk experiments`, bulkExperiments],
    [`latest single cell experiments`, singleCellExperiments]
  ])(`matches snapshot: %s`, (titleText, experiments) => {
    const tree = renderer
      .create(<LatestExperimentsList
        host={`https://www.ebi.ac.uk/gxa/`}
        experiments={experiments}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
