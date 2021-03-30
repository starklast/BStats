import { createSlice } from '@reduxjs/toolkit'
import { dayItems_changOnFild } from './dayItems'
const slice = createSlice({
  name: 'activEntity',
  initialState: {
    idFild: null,
    idItem: null,
    name: '',
    value: null,
    inputMode: null,
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
    },
    activEntity_setValue: (state, action) => {
      state.value = action.payload
      state.data[state.idFild] = action.payload
    },
  },
})

export const { activEntity_activate, activEntity_setValue } = slice.actions

export const activEntity_changEntity = (changIndex) => (dispatch, getState) => {
  const {
    dayItems: {
      value: { mHeadTitle, data },
    },
    activEntity,
  } = getState()
  const { idFild, value } = activEntity
  const newactivEntity = { ...activEntity }
  let id_newCurrentFild = idFild
  const curentIndex = mHeadTitle.findIndex((item) => item.id === idFild)
  if (curentIndex !== -1) {
    console.log(mHeadTitle[curentIndex].name)
    if (mHeadTitle[curentIndex].id == 'registration' && value == 'regular') {
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

export const activEntity_activateFild = (idFild) => (dispatch, getState) => {
  const {
    dayItems: {
      value: { mHeadTitle, data },
    },
    activEntity,
  } = getState()
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
    dispatch(activEntity_activate({ ...newactivEntity, idFild: idFild }))
  }
}

export const activEntity_changItem = (idItem) => (dispatch, getState) => {
  const {
    dayItems: {
      value: { mHeadTitle, data },
    },
    activEntity,
  } = getState()
  const newactivEntity = { ...activEntity }
  let id_newCurrentFild = 'registration'
  const newIndex = mHeadTitle.findIndex((item) => item.id === id_newCurrentFild)

  newactivEntity.idItem = idItem
  newactivEntity.idFild = id_newCurrentFild

  newactivEntity.name = mHeadTitle[newIndex].name
  newactivEntity.inputMode = mHeadTitle[newIndex].inputMode
  const dataItem = data.find((element) => element._id === newactivEntity.idItem)
  if (dataItem) {
    newactivEntity.value = dataItem[id_newCurrentFild]
    newactivEntity.data = dataItem
  }
  dispatch(activEntity_activate({ ...newactivEntity }))
}

export const activEntity_changValue = (newValue, clear = false) => (
  dispatch,
  getState
) => {
  const { value, idFild, idItem, inputMode } = getState().activEntity
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
  dispatch(dayItems_changOnFild({ value: valueForSet, idFild, idItem }))
}

export const selectactivEntity = (state) => state.activEntity

export default slice.reducer
