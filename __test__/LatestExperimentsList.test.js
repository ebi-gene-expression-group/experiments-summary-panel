import { mount } from 'enzyme'

import { bulkExperiments, singleCellExperiments } from './TestUtils'

import LatestExperimentsList from '../src/LatestExperimentsList'

describe(`LatestExperimentsList`, () => {
  test.each([
    [`latest bulk experiments`, bulkExperiments],
    [`latest single cell experiments`, singleCellExperiments]
  ])(`matches snapshot: %s`, (titleText, experiments) => {
    expect(
      mount(<LatestExperimentsList host={`https://www.ebi.ac.uk/gxa/`} experiments={experiments}/>)
    ).toMatchSnapshot()
  })
})
