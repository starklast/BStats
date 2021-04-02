import React from 'react'
import { useSelector } from 'react-redux'
import { selectBooksDayItems } from '../features/booksDayItems'

const renderHeadItems = (arr) => {
  return arr
    .filter(({ display }) => display)
    .map((item) => {
      const { id, name } = item
      return <td key={id}>{name}</td>
    })
}
function BookHeadFromMass() {
  console.log(useSelector(selectBooksDayItems))
  const {
    value: { mHeadTitle },
  } = useSelector(selectBooksDayItems)
  console.log(mHeadTitle)
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

export default BookHeadFromMass
