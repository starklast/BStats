import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import { dayItems_addNewItem, dayItems_deleteItem } from '../features/dayItems'
function TablePanel() {
  const dispatch = useDispatch()
  return (
    <ButtonGroup aria-label='Table panel'>
      <Button
        variant='secondary'
        onClick={() => {
          dispatch(dayItems_addNewItem())
        }}
      >
        {' '}
        Add new item{' '}
      </Button>
      <Button
        variant='secondary'
        onClick={() => {
          dispatch(dayItems_deleteItem())
        }}
      >
        {' '}
        Delete item{' '}
      </Button>
    </ButtonGroup>
  )
}

export default TablePanel
