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
  { name: 'ukrainian', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
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

export {
  getProbableValuesForParam,
  getDataByEntityFild,
  getPresentationOfData,
  getValidationStatus,
}
