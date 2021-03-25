const mHeadTitle = [
  { id: 'id', name: '#' },
  { id: 'col1', name: 'col 1' },
  { id: 'col2', name: 'col 2' },
  { id: 'col3', name: 'col 3' },
  { id: 'col4', name: 'col 4' },
  { id: 'col5', name: 'col 5' },
  { id: 'col6', name: 'col 6' },
]
let data = [
  {
    date: '2021-03-07',
    data: [
      {
        id: '01',
        col1: '0',
        col3: '0',
        col2: '0',
        col4: '0',
        col5: '0',
        col6: '0',
      },
      {
        id: '02',
        col1: '0',
        col3: '0',
        col2: '0',
        col4: '0',
        col5: '0',
        col6: '0',
      },
    ],
  },

  {
    date: '2021-03-09',
    data: [
      {
        id: '04',
        col1: 'col1dddd',
        col3: 'col2fff',
        col2: 'col3gggg',
        col4: 'col3DDDgggg',
        col5: 'col3DDDgggg',
        col6: 'col3DDDgggg',
      },
      {
        id: '06',
        col1: 'col1dddd',
        col3: 'col2fff',
        col2: 'col3gggg',
        col4: 'col3DDDggggDD',
        col5: 'col3DDDgggg',
        col6: 'col3DDDgggg',
      },
    ],
  },
]

function getData(date = '2021-03-08') {
  const curData = data.filter((item) => item.date === date)
  //console.log(curData)
  return {
    mHeadTitle,
    data: curData && curData.length > 0 ? [...curData[0].data] : undefined,
  }
}

export const setDataItem = (date, idItem, idFild, value) => {
  const curData = data.find((item) => item.date === date)
  if (curData) {
    const entityIndex = curData.data.findIndex((item) => item.id === idItem)
    if (!(entityIndex === -1)) {
      const newData = { ...curData.data[entityIndex] }
      newData[idFild] = value
      curData.data[entityIndex] = newData
    }
  }
}

export const addDataItem = (date) => {
  const curData = data.find((item) => item.date === date)
  if (curData) {
    curData.data.push({ id: 0 })
  }
}
export const deleteDataItem = (date, idItem) => {
  const curData = data.find((item) => item.date === date)

  if (curData) {
    curData.data = curData.data.filter((item) => !(item.id === idItem))
  }
}

export default getData
