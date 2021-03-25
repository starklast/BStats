/* import React, { Component } from 'react'
import { getPresentationOfData, getValidationStatus } from '../utils/EditUtils'

export default class TDateFromMass extends Component {
  constructor(props) {
    super(props)
  }

  renderItems(arr, head, onClickFild, editEntity, curentFild) {
    return arr.map((item) => {
      const rowData = head.map(({ id }) => {
        const activFildClass =
          curentFild === id && editEntity === item.id ? 'bg-primary' : ''
        return (
          <td
            key={id}
            className={activFildClass}
            onClick={() => onClickFild(item.id, id)}
          >
            {getPresentationOfData(item[id])}
          </td>
        )
      })
      let activEntityClass =
        editEntity === item.id
          ? getValidationStatus(head, item)
            ? 'bg-success'
            : 'bg-warning'
          : ''
      //activEntityClass = activEntityClass + getValidationStatus(head,arr)?'':''
      //console.log(curentFild)
      //console.log(editEntity)
      return (
        <tr key={item.id} className={activEntityClass}>
          {rowData}
        </tr>
      )
    })
  }

  render() {
    const {
      data,
      mHeadTitle,
      onClickEntity,
      onClickFild,
      editEntity,
      curentFild,
    } = this.props

    if (!data) {
      return <tbody></tbody>
    }

    const items = this.renderItems(
      data,
      mHeadTitle,
      onClickFild,
      editEntity,
      curentFild
    )
    return <tbody>{items}</tbody>
  }
} */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectdayItems } from '../features/dayItems'
import {
  selectactivEntity,
  activEntity_activate,
} from '../features/activEntity'

import { getPresentationOfData, getValidationStatus } from '../utils/EditUtils'

const renderItems = (arr, head, editEntity, curentFild, dispatch) => {
  return arr.map((item) => {
    const rowData = head.map(({ id, name }) => {
      const activFildClass =
        curentFild === id && editEntity === item.id ? 'bg-primary' : ''
      return (
        <td
          key={id}
          className={activFildClass}
          onClick={() => {
            dispatch(
              activEntity_activate({
                idFild: id,
                idItem: item.id,
                name: name,
                value: item[id],
              })
            )
          }}
        >
          {getPresentationOfData(item[id])}
        </td>
      )
    })
    let activEntityClass =
      editEntity === item.id
        ? getValidationStatus(head, item)
          ? 'bg-success'
          : 'bg-warning'
        : ''
    return (
      <tr key={item.id} className={activEntityClass}>
        {rowData}
      </tr>
    )
  })
}
function TDateFromMass() {
  const dispatch = useDispatch()

  const dayItems = useSelector(selectdayItems)
  const activEntity = useSelector(selectactivEntity) //{idFild,idItem}

  if (!dayItems || !dayItems.status === 'success') {
    return <tbody></tbody>
  }

  const { data, mHeadTitle } = dayItems.value
  if (!data || !mHeadTitle) {
    return <tbody></tbody>
  }
  const items = renderItems(
    data,
    mHeadTitle,
    activEntity.idItem,
    activEntity.idFild,
    dispatch
  )
  return <tbody>{items}</tbody>
}

export default TDateFromMass
