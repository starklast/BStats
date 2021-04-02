import {
  DATA_TYPE_DATA,
  DATA_TYPE_BOOKS_DATA,
  LINK_EDIT_DAY,
  LINK_EDIT_ENTITY,
  LINK_EDIT_BOOKS_DAY,
  LINK_EDIT_BOOKS_ENTITY,
} from '../constants/Constats'
import { dayItems_addNewItem, dayItems_deleteItem } from '../features/dayItems'
import {
  dayItems_addNewItem as dayBooksItems_addNewItem,
  dayItems_deleteItem as dayBooksItems_deleteItem,
} from '../features/booksDayItems'

const paramOptions = [
  { name: 'id', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
  { name: 'registration', pValue: ['first', 'rewrite', 'regular'] },
  {
    name: 'formСategory',
    pValue: ['preschool', '1', '2-3', '4-5', '6-7', '8-9', 'other'],
  },
  { name: 'gender', pValue: ['male', 'female'] },
  { name: 'books', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'periodical', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  { name: 'type1', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'type2', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'type3', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'type4', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'type5', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'type6', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'Count', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'ukrainian', pValue: [true, false] },
  { name: 'bookType', pValue: ['book', 'periodical'] },
  {
    name: 'bookСategory',
    pValue: ['30/70', '2/5', '3/4 6', '85/7', '82', 'др.'],
  },
]
function getProbableValuesForParam(paramName) {
  //console.log(paramName)
  //console.log(paramOptions.find((element) => element.name === paramName))

  return paramOptions.find((element) => element.name === paramName)
}
function getDataByEntityFild({ data }, idEntity, idFild) {
  //console.log(data)
  //console.log(idEntity)

  const entity = data.find((item) => item.id === idEntity)
  if (entity) {
    return entity[idFild]
  }
  return null
}

function getPresentationOfData(value) {
  //console.log(value)
  if (value === true) return 'Yes'
  if (value === false) return 'No'

  return value
}

function getValidationStatus(mHeadTitle, entity) {
  return true
  //console.log(mHeadTitle[1].id)
  /* if (
    parseFloat(entity[mHeadTitle[5].id]) +
      parseFloat(entity[mHeadTitle[6].id]) ===
    parseFloat(entity[mHeadTitle[7].id]) +
      parseFloat(entity[mHeadTitle[8].id]) +
      parseFloat(entity[mHeadTitle[9].id]) +
      parseFloat(entity[mHeadTitle[10].id]) +
      parseFloat(entity[mHeadTitle[11].id]) +
      parseFloat(entity[mHeadTitle[12].id])
  ) {
    return true
  } else {
    return false
  } */
}

export const getPropsForTablePanel = (dataType) => {
  switch (dataType) {
    case DATA_TYPE_BOOKS_DATA:
      return {
        linkEdit: LINK_EDIT_BOOKS_ENTITY,
        linkDataView: LINK_EDIT_BOOKS_DAY,
        to_do_add: dayBooksItems_addNewItem, //,
        to_do_delete: dayBooksItems_deleteItem,
      }
    case DATA_TYPE_DATA:
      return {
        linkEdit: LINK_EDIT_ENTITY,
        linkDataView: LINK_EDIT_DAY,
        to_do_add: dayItems_addNewItem,
        to_do_delete: dayItems_deleteItem,
      }
    default:
      return { linkEdit: '/' }
  }
}

export const getStateForActivEntity = (dataType, getState) => {
  const { dayItems, booksDayItems, activEntity } = getState()
  let id_newCurrentFild = 'registration'
  if (dataType === DATA_TYPE_DATA) {
    const {
      value: { mHeadTitle, data },
    } = dayItems
    id_newCurrentFild = 'registration'
    return { activEntity, mHeadTitle, data, id_newCurrentFild }
  } else {
    const {
      value: { mHeadTitle, data },
    } = booksDayItems
    id_newCurrentFild = 'bookType'
    return { activEntity, mHeadTitle, data, id_newCurrentFild }
  }
}

export {
  getProbableValuesForParam,
  getDataByEntityFild,
  getPresentationOfData,
  getValidationStatus,
}
