const paramOptions = [
  { name: 'col1', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { name: 'col2', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { name: 'col3', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { name: 'col4', pValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { name: 'col5', pValue: [true, false] },
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
  //console.log(mHeadTitle[1].id)
  if (
    parseFloat(entity[mHeadTitle[1].id]) +
      parseFloat(entity[mHeadTitle[2].id]) ===
    parseFloat(entity[mHeadTitle[3].id]) +
      parseFloat(entity[mHeadTitle[4].id]) +
      parseFloat(entity[mHeadTitle[5].id])
  ) {
    return true
  } else {
    return false
  }
}

export {
  getProbableValuesForParam,
  getDataByEntityFild,
  getPresentationOfData,
  getValidationStatus,
}
