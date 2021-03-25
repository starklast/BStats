import { configureStore } from '@reduxjs/toolkit'
import dateReduser from './features/date'
import dayItemsReduser from './features/dayItems'
import activEntityReduser from './features/activEntity'

export default configureStore({
  reducer: {
    date: dateReduser,
    dayItems: dayItemsReduser,
    activEntity: activEntityReduser,
  },
})
