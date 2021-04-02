import { createSlice } from '@reduxjs/toolkit'
import { DATA_TYPE_BOOKS_DATA } from '../constants/Constats'
import {
  setBooksDataItem,
  addBooksDataItem,
  deleteBooksDataItem,
  getBooksData,
} from '../data/getDataOfDay'
import { activEntity_changItem } from './activEntity'
const slice = createSlice({
  name: 'booksDayItems',
  initialState: {
    status: 'idle',
    error: null,
    value: {},
  },
  reducers: {
    dayItems_Read_Request: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    dayItems_Read_Success: (state, action) => {
      state.status = 'sucess'
      state.error = null
      state.value = action.payload
    },
    dayItems_Read_Fail: (state, action) => {
      state.status = 'fail'
      state.error = action.payload
    },
  },
})

export const {
  dayItems_Read_Request,
  dayItems_Read_Success,
  dayItems_Read_Fail,
} = slice.actions

export const dayItems_Read = () => (dispatch, getState) => {
  dispatch(dayItems_Read_Request())
  const {
    date: { value },
  } = getState()
  let dayData = getBooksData(value)
  console.log(`day: ${value}`)
  dispatch(dayItems_Read_Success(dayData))
}

export const dayItems_changOnFild = ({ idItem, idFild, value }) => (
  dispatch,
  getState
) => {
  const curentState = getState()

  setBooksDataItem(curentState.date.value, idItem, idFild, value)

  dispatch(dayItems_Read(curentState.date.value))
}

export const dayItems_addNewItem = () => (dispatch, getState) => {
  const curentState = getState()

  const idFild = addBooksDataItem(curentState.date.value)
  console.log('read')
  dispatch(dayItems_Read(curentState.date.value))
  console.log('chang')
  dispatch(activEntity_changItem(idFild, DATA_TYPE_BOOKS_DATA))
  console.log('changPost')
}

export const dayItems_deleteItem = () => (dispatch, getState) => {
  const {
    date: { value },
    activEntity: { idItem },
  } = getState()

  deleteBooksDataItem(value, idItem)

  dispatch(dayItems_Read(value))
}

export const selectBooksDayItems = (state) => state.booksDayItems

export default slice.reducer
