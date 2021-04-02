/* import React, { Component } from 'react'

export default class THeadFromMass extends Component {
  constructor(props) {
    super(props)
  }

  renderHeadItems(arr) {
    return arr.map((item) => {
      const { id, name } = item
      return <td key={id}>{name}</td>
    })
  }

  render() {
    const { mHeadTitle } = this.props

    const items = this.renderHeadItems(mHeadTitle)

    return (
      <thead>
        <tr>{items}</tr>
      </thead>
    )
  }
} */

import React from 'react'
import { useSelector } from 'react-redux'
import { selectdayItems } from '../features/dayItems'

const renderHeadItems = (arr) => {
  return arr
    .filter(({ display }) => display)
    .map((item) => {
      const { id, name } = item
      return <td key={id}>{name}</td>
    })
}
function THeadFromMass() {
  const {
    value: { mHeadTitle },
  } = useSelector(selectdayItems)
  if (mHeadTitle) {
    const items = renderHeadItems(mHeadTitle)

    return (
      <thead>
        <tr>{items}</tr>
      </thead>
    )
  }
  return <thead></thead>
}

export default THeadFromMass
