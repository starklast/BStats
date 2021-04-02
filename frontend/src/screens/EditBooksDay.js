import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DateSelector from '../components/Date'
import BookHeadFromMass from '../components/BookHeadFromMass'
import BookDateFromMass from '../components/BookDateFromMass'
import { Table } from 'react-bootstrap'
import EditParam from '../components/EditParam'
import { dayItems_Read } from '../features/booksDayItems'
import TablePanel from '../components/TablePanel'
import { DATA_TYPE_BOOKS_DATA } from '../constants/Constats'

function EditBooksDay() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dayItems_Read())
  })
  return (
    <>
      <DateSelector />
      <Table striped bordered hover>
        <BookHeadFromMass />
        <BookDateFromMass />
      </Table>
      <TablePanel dataType={DATA_TYPE_BOOKS_DATA} />
      <EditParam dataType={DATA_TYPE_BOOKS_DATA} />
    </>
  )
}

export default EditBooksDay
