import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { getPropsForTablePanel } from '../utils/EditUtils'
function TablePanel(props) {
  const dispatch = useDispatch()
  console.log(props)
  const {
    linkEdit,
    linkDataView,
    to_do_add,
    to_do_delete,
  } = getPropsForTablePanel(props.dataType)
  return (
    <ButtonGroup aria-label='Table panel'>
      <LinkContainer to={linkEdit}>
        <Button
          variant='secondary'
          onClick={() => {
            //to_do_add(dispatch)
            dispatch(to_do_add())
            console.log('afte dispatch add')
          }}
        >
          {' '}
          Add{' '}
        </Button>
      </LinkContainer>
      <LinkContainer to={linkEdit}>
        <Button variant='secondary'> Edit </Button>
      </LinkContainer>
      <Button
        variant='secondary'
        onClick={() => {
          dispatch(to_do_delete())
        }}
      >
        {' '}
        Delete{' '}
      </Button>
      <LinkContainer to={linkDataView}>
        <Button variant='primary'> Confirm </Button>
      </LinkContainer>
    </ButtonGroup>
  )
}

export default TablePanel
