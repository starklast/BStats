import { createSlice } from '@reduxjs/toolkit'
import { dayItems_changOnFild } from './dayItems'
const slice = createSlice({
  name: 'activEntity',
  initialState: {
    idFild: null,
    idItem: null,
    name: '',
    value: null,
  },
  reducers: {
    activEntity_activate: (state, action) => {
      state.idFild = action.payload.idFild
      state.idItem = action.payload.idItem
      state.name = action.payload.name
      state.value = action.payload.value
    },
    activEntity_setValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { activEntity_activate, activEntity_setValue } = slice.actions

export const activEntity_changEntity = (changIndex) => (dispatch, getState) => {
  const {
    dayItems: {
      value: { mHeadTitle },
    },
    activEntity,
  } = getState()
  const { idFild } = activEntity
  let newCurrentFild = idFild
  const curentIndex = mHeadTitle.findIndex((item) => item.id === idFild)

  if (changIndex < 0 && curentIndex + changIndex >= 0) {
    newCurrentFild = mHeadTitle[curentIndex + changIndex].id
  } else if (changIndex > 0 && curentIndex + changIndex < mHeadTitle.length) {
    newCurrentFild = mHeadTitle[curentIndex + changIndex].id
  }
  if (!(idFild === newCurrentFild)) {
    dispatch(activEntity_activate({ ...activEntity, idFild: newCurrentFild }))
  }
}

export const activEntity_changValue = (newValue) => (dispatch, getState) => {
  const { value, idFild, idItem } = getState().activEntity
  console.log(parseFloat(value))
  const valueForSet =
    parseFloat(newValue) > 0 && value
      ? parseFloat(value) + parseFloat(newValue)
      : newValue
  dispatch(activEntity_setValue(valueForSet))
  dispatch(dayItems_changOnFild({ value: valueForSet, idFild, idItem }))
}

export const selectactivEntity = (state) => state.activEntity

export default slice.reducer
