import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBooksDayItems } from '../features/booksDayItems'
import {
  selectactivEntity,
  activEntity_activate,
} from '../features/activEntity'

import { getPresentationOfData, getValidationStatus } from '../utils/EditUtils'
import { DATA_TYPE_BOOKS_DATA } from '../constants/Constats'

const renderItems = (arr, head, editEntity, curentFild, dispatch) => {
  return arr.map((item) => {
    const rowData = head
      .filter(({ display }) => display)
      .map(({ id, name, inputMode }) => {
        const activFildClass =
          curentFild === id && editEntity === item._id ? 'bg-primary' : ''
        return (
          <td
            key={id}
            className={activFildClass}
            onClick={() => {
              dispatch(
                activEntity_activate({
                  idFild: id,
                  idItem: item._id,
                  name: name,
                  value: item[id],
                  inputMode: inputMode,
                  data: item,
                  dataType: DATA_TYPE_BOOKS_DATA,
                })
              )
            }}
          >
            {getPresentationOfData(item[id])}
          </td>
        )
      })
    let activEntityClass =
      editEntity === item._id
        ? getValidationStatus(head, item)
          ? 'bg-success'
          : 'bg-warning'
        : ''
    return (
      <tr key={item._id} className={activEntityClass}>
        {rowData}
      </tr>
    )
  })
}
function TDateFromMass() {
  const dispatch = useDispatch()

  const dayItems = useSelector(selectBooksDayItems)
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
