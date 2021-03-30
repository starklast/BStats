import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { dayItems_addNewItem, dayItems_deleteItem } from '../features/dayItems'
function TablePanel() {
  const dispatch = useDispatch()
  return (
    <ButtonGroup aria-label='Table panel'>
      <LinkContainer to='/editEntity'>
        <Button
          variant='secondary'
          onClick={() => {
            dispatch(dayItems_addNewItem())
          }}
        >
          {' '}
          Add{' '}
        </Button>
      </LinkContainer>
      <LinkContainer to='/editEntity'>
        <Button variant='secondary'> Edit </Button>
      </LinkContainer>
      <Button
        variant='secondary'
        onClick={() => {
          dispatch(dayItems_deleteItem())
        }}
      >
        {' '}
        Delete{' '}
      </Button>
      <LinkContainer to='/edit'>
        <Button variant='primary'> Confirm </Button>
      </LinkContainer>
    </ButtonGroup>
  )
}

export default TablePanel
