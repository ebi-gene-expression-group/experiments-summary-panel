import React from 'react'
import ReactDOM from 'react-dom'

import ExperimentsSummaryPanel from '../src/ExperimentsSummaryPanel'

const render = (options, target) => {
  ReactDOM.render(<ExperimentsSummaryPanel {...options} />, document.getElementById(target))
}

export { render }
