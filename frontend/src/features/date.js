import { createSlice } from '@reduxjs/toolkit'
import { dayItems_Read } from './dayItems'

let newDate = new Date()
let date = newDate.getDate()
let month = newDate.getMonth() + 1
let year = newDate.getFullYear()
const separator = '-'
const currentDate = `${year}${separator}${
  month < 10 ? `0${month}` : `${month}`
}${separator}${date}`

const dateFromStorage = localStorage.getItem('date')
  ? JSON.parse(localStorage.getItem('date'))
  : currentDate

const slice = createSlice({
  name: 'curentDate',
  initialState: {
    value: dateFromStorage,
  },
  reducers: {
    changeDate: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeDate } = slice.actions

export const reqChangeDate = (date) => (dispatch, getState) => {
  dispatch(changeDate(date))
  //console.log(getState().data.value)
  localStorage.setItem('date', JSON.stringify(getState().date.value))
  dispatch(dayItems_Read())
}

export const selectDate = (state) => state.date.value

export default slice.reducer
