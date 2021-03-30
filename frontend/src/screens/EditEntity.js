import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EditParam from '../components/EditParam'
import { dayItems_Read } from '../features/dayItems'
import EntityView from '../components/EntityView'
import TablePanel from '../components/TablePanel'
function EditEntity() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dayItems_Read())
  })
  return (
    <>
      <EntityView />
      <EditParam />
      <TablePanel />
    </>
  )
}

export default EditEntity
