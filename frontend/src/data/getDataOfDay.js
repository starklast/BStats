import { v4 as uuidv4 } from 'uuid'
const mHeadTitle = [
  { id: '_id', name: '#', display: false },
  { id: 'registration', name: 'Рег.', display: true, inputMode: 3 },
  { id: 'formСategory', name: 'Кат.', display: true, inputMode: 3 },
  { id: 'gender', name: 'Пол', display: true, inputMode: 3 },
  { id: 'id', name: 'Номер', display: true, inputMode: 1 },
  /* { id: 'books', name: 'Книг', display: true, inputMode: 2 },
  { id: 'periodical', name: 'Переодики', display: true, inputMode: 2 },
  { id: 'type1', name: '30/70', display: true, inputMode: 2 },
  { id: 'type2', name: '2/5', display: true, inputMode: 2 },
  { id: 'type3', name: '3/4 6', display: true, inputMode: 2 },
  { id: 'type4', name: '85/7', display: true, inputMode: 2 },
  { id: 'type5', name: '82', display: true, inputMode: 2 },
  { id: 'type6', name: 'др.', display: true, inputMode: 2 },
  { id: 'ukrainian', name: 'Укр', display: true, inputMode: 2 }, */
]
const mHeadBooksDataTitle = [
  { id: '_id', name: '#', display: false },
  { id: 'idForm', name: 'Номер', display: true },
  { id: 'bookType', name: 'Тип издания.', display: true, inputMode: 3 },
  { id: 'Count', name: 'К-во', display: true, inputMode: 1 },
  { id: 'bookСategory', name: 'Категория', display: true, inputMode: 3 },
  { id: 'ukrainian', name: 'Укр.', display: true, inputMode: 3 },
]
let data = [
  {
    date: '2021-03-07',
    data: [],
    booksData: [],
  },
]

const emptyTemplateData = {
  _id: '',
  registration: '',
  formСategory: '',
  gender: '',
  id: '',
  /* books: 0,
  periodical: 0,
  type1: 0,
  type2: 0,
  type3: 0,
  type4: 0,
  type5: 0,
  type6: 0,
  ukrainian: 0,
  detailedData: [], */
}

const emptyTemplateBooksData = {
  _id: '',
  idForm: '',
  bookType: '',
  Count: '',
  bookСategory: '',
  ukrainian: '',
}

const addNewDataItem = (date) => {
  const newDate = { date: date, data: [], booksData: [] }
  data.push(newDate)
  return newDate
}

function getData(date = '2021-03-08') {
  const curData = data.filter((item) => item.date === date)
  //console.log(curData)
  return {
    mHeadTitle,
    data: curData && curData.length > 0 ? [...curData[0].data] : undefined,
    booksData:
      curData && curData.length > 0 ? [...curData[0].booksData] : undefined,
  }
}

export const setDataItem = (date, idItem, idFild, value) => {
  const curData = data.find((item) => item.date === date)
  if (curData) {
    const entityIndex = curData.data.findIndex((item) => item._id === idItem)
    if (!(entityIndex === -1)) {
      const newData = { ...curData.data[entityIndex] }
      newData[idFild] = value
      curData.data[entityIndex] = newData
    }
  }
}

export const addDataItem = (date) => {
  const curData = data.find((item) => item.date === date)
  const newID = uuidv4()
  if (curData) {
    curData.data.push({ _id: newID, id: '' })
  } else {
    newDate = addNewDataItem(date)
    newDate.data.push({ ...emptyTemplateData, _id: newID })
  }
  return newID
}
export const deleteDataItem = (date, idItem) => {
  const curData = data.find((item) => item.date === date)

  if (curData) {
    curData.data = curData.data.filter((item) => !(item._id === idItem))
  }
}

export const setBooksDataItem = (date, idItem, idFild, value) => {
  const curData = data.find((item) => item.date === date)
  if (curData) {
    const entityIndex = curData.booksData.findIndex(
      (item) => item._id === idItem
    )
    if (!(entityIndex === -1)) {
      const newData = { ...curData.booksData[entityIndex] }
      newData[idFild] = value
      curData.booksData[entityIndex] = newData
    }
  }
}

export const addBooksDataItem = (date) => {
  const curData = data.find((item) => item.date === date)
  const newID = uuidv4()
  if (curData) {
    curData.booksData.push({ _id: newID, id: '' })
  } else {
    newDate = addNewDataItem(date)
    newDate.booksData.push({ ...emptyTemplateBooksData, _id: newID })
  }
  return newID
}
export const deletBooksDataItem = (date, idItem) => {
  const curData = data.find((item) => item.date === date)

  if (curData) {
    curData.data = curData.booksData.filter((item) => !(item._id === idItem))
  }
}

export default getData
