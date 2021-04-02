import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EditParam from '../components/EditParam'
import { dayItems_Read } from '../features/booksDayItems'
import EntityView from '../components/BooksEntityView'
import TablePanel from '../components/TablePanel'
import { DATA_TYPE_BOOKS_DATA } from '../constants/Constats'

function EditEntity() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dayItems_Read())
  })
  return (
    <>
      <EntityView />
      <EditParam dataType={DATA_TYPE_BOOKS_DATA} />
      <TablePanel dataType={DATA_TYPE_BOOKS_DATA} />
    </>
  )
}

export default EditEntity
