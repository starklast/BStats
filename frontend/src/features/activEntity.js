import { createSlice } from '@reduxjs/toolkit'
import { dayItems_changOnFild } from './dayItems'
import { dayItems_changOnFild as booksDayItems_changOnFild } from './booksDayItems'
import { DATA_TYPE_BOOKS_DATA, DATA_TYPE_DATA } from '../constants/Constats'
import { getStateForActivEntity } from '../utils/EditUtils'
const slice = createSlice({
  name: 'activEntity',
  initialState: {
    idFild: null,
    idItem: null,
    name: '',
    value: null,
    inputMode: null,
    dataType: null,
    data: [],
  },
  reducers: {
    activEntity_activate: (state, action) => {
      state.idFild = action.payload.idFild
      state.idItem = action.payload.idItem
      state.name = action.payload.name
      state.value = action.payload.value
      state.inputMode = action.payload.inputMode
      state.data = action.payload.data
      state.dataType = action.payload.dataType
    },
    activEntity_setValue: (state, action) => {
      state.value = action.payload
      state.data[state.idFild] = action.payload
    },
  },
})

export const { activEntity_activate, activEntity_setValue } = slice.actions

export const activEntity_changEntity = (changIndex, dataType) => (
  dispatch,
  getState
) => {
  const { mHeadTitle, data, activEntity } = getStateForActivEntity(
    dataType,
    getState
  )
  const { idFild, value } = activEntity
  const newactivEntity = { ...activEntity }
  let id_newCurrentFild = idFild
  const curentIndex = mHeadTitle.findIndex((item) => item.id === idFild)
  if (curentIndex !== -1) {
    console.log(mHeadTitle[curentIndex].name)
    if (mHeadTitle[curentIndex].id === 'registration' && value === 'regular') {
      changIndex = changIndex + 2
    }
  }
  if (
    (changIndex < 0 && curentIndex + changIndex >= 0) ||
    (changIndex > 0 && curentIndex + changIndex < mHeadTitle.length)
  ) {
    const newIndex = curentIndex + changIndex
    id_newCurrentFild = mHeadTitle[newIndex].id
    newactivEntity.name = mHeadTitle[newIndex].name
    newactivEntity.inputMode = mHeadTitle[newIndex].inputMode
    const dataItem = data.find(
      (element) => element._id === newactivEntity.idItem
    )
    if (dataItem) {
      newactivEntity.value = dataItem[id_newCurrentFild]
      newactivEntity.data = dataItem
    }
  }
  if (!(idFild === id_newCurrentFild)) {
    dispatch(
      activEntity_activate({ ...newactivEntity, idFild: id_newCurrentFild })
    )
  }
}

export const activEntity_activateFild = (idFild, dataType) => (
  dispatch,
  getState
) => {
  const { mHeadTitle, data, activEntity } = getStateForActivEntity(
    dataType,
    getState
  )
  const newactivEntity = { ...activEntity }
  const newIndex = mHeadTitle.findIndex((item) => item.id === idFild)
  if (newIndex !== -1) {
    newactivEntity.name = mHeadTitle[newIndex].name
    newactivEntity.inputMode = mHeadTitle[newIndex].inputMode
    const dataItem = data.find(
      (element) => element._id === newactivEntity.idItem
    )
    if (dataItem) {
      newactivEntity.value = dataItem[idFild]
      newactivEntity.data = dataItem
    }
    dispatch(
      activEntity_activate({ ...newactivEntity, idFild: idFild, dataType })
    )
  }
}

export const activEntity_changItem = (idItem, dataType) => (
  dispatch,
  getState
) => {
  console.log(dataType)
  const {
    mHeadTitle,
    data,
    activEntity,
    id_newCurrentFild,
  } = getStateForActivEntity(dataType, getState)
  console.log(dataType)
  const newactivEntity = { ...activEntity }

  const newIndex = mHeadTitle.findIndex((item) => item.id === id_newCurrentFild)

  newactivEntity.idItem = idItem
  newactivEntity.idFild = id_newCurrentFild

  console.log(mHeadTitle)
  console.log(newIndex)
  newactivEntity.name = mHeadTitle[newIndex].name
  newactivEntity.inputMode = mHeadTitle[newIndex].inputMode
  const dataItem = data.find((element) => element._id === newactivEntity.idItem)
  if (dataItem) {
    newactivEntity.value = dataItem[id_newCurrentFild]
    newactivEntity.data = dataItem
  }
  console.log(newactivEntity)
  dispatch(activEntity_activate({ ...newactivEntity, dataType }))
  // console.log(dataType)
}

export const activEntity_changValue = (newValue, clear = false) => (
  dispatch,
  getState
) => {
  const { value, idFild, idItem, inputMode, dataType } = getState().activEntity
  console.log(parseFloat(value))
  let valueForSet = newValue
  console.log(inputMode)
  if (clear) {
    valueForSet = inputMode === 2 ? 0 : ''
  } else {
    switch (inputMode) {
      case 1:
        valueForSet = value + newValue
        break
      case 2:
        valueForSet =
          parseFloat(newValue) > 0 && value
            ? parseFloat(value) + parseFloat(newValue)
            : newValue
        break
      default:
        valueForSet = newValue
        break
    }
  }
  dispatch(activEntity_setValue(valueForSet))
  switch (dataType) {
    case DATA_TYPE_BOOKS_DATA:
      dispatch(
        booksDayItems_changOnFild({ value: valueForSet, idFild, idItem })
      )
      break
    case DATA_TYPE_DATA:
      dispatch(dayItems_changOnFild({ value: valueForSet, idFild, idItem }))
      break

    default:
      break
  }
}

export const selectactivEntity = (state) => state.activEntity

export default slice.reducer
