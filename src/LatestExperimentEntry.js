import React from 'react'
import styled from 'styled-components'

import URI from 'urijs'

import { experimentPropTypes } from './experimentsPropTypes'

const TableCellDiv = styled.div`
  padding-right: 0px;
  vertical-align: middle;
  display: table-cell;
`

const FooSpan = styled.span`
  margin-bottom: 0px;
  width: 140px;
  cursor: default;
  background-color: ${props => props.backgroundColor};
  :hover{
    opacity: 1.0;
    background-color: ${props => props.backgroundColor};
  }
`

// TODO We should probably create an entry per experiment type so that instead of assays we show e.g. cells/contrasts
function LatestExperimentEntry (props) {
  const { experimentType, experimentAccession, experimentDescription, numberOfAssays, lastUpdate, species, host } = props
  const experimentUrl = URI(`experiments/${experimentAccession}`, host).toString()

  return (
    <div style={{ display: `block`, marginBottom: `1rem` }}>
      {
        !experimentType.startsWith(`SINGLE_CELL`) &&
        <TableCellDiv>
          <FooSpan className={`button`} backgroundColor={`#007c82`}>
            {experimentType.endsWith(`BASELINE`) ? `Baseline` : `Differential`}
          </FooSpan>
        </TableCellDiv>
      }

      <TableCellDiv className={`hide-for-small-only`}>
        <FooSpan className={`button`} backgroundColor={`gray`} style={{ minWidth: `120px` }} title={`Number of assays in experiment`}>
          { numberOfAssays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`) } assays
        </FooSpan>
      </TableCellDiv>

      <TableCellDiv className={`hide-for-small-only`}>
        <a className={`button`} style={{ marginBottom: `0px`, backgroundColor: `#3497C5` }} href={experimentUrl}>
          Results
        </a>
      </TableCellDiv>

      <TableCellDiv style={{ paddingLeft: `1rem` }}>
        <small>{lastUpdate}</small><br/>
        <a href={experimentUrl}>
          {experimentDescription} – <i>{species}</i>
        </a>
      </TableCellDiv>
    </div>
  )
}

LatestExperimentEntry.propTypes = experimentPropTypes

export default LatestExperimentEntry
