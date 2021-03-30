/* import React, { Component } from 'react'
import {
  getProbableValuesForParam,
  getPresentationOfData,
} from '../utils/EditUtils'
import { Form, Col, Row, Button } from 'react-bootstrap'
export default class EditParam extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name, value: props.value }
  }

  render() {
    const { name, value, onClick, changParam } = this.props
    const editOptions = getProbableValuesForParam(name)
    const formPatern = (
      <Form>
        <Form.Group as={Row} controlId='{name}'>
          <Form.Label column sm='2' xs='2'>
            {name}
          </Form.Label>
          <Col sm='10' xs='10'>
            <Form.Control
              plaintext
              readOnly
              placeholder={getPresentationOfData(value)}
            />
          </Col>
        </Form.Group>
      </Form>
    )
    let buttonPatern = []
    if (editOptions) {
      buttonPatern = editOptions.pValue.map((element) => {
        return (
          <Button
            key={element}
            variant='primary'
            className='mx-1 my-1'
            onClick={() => {
              onClick(element)
            }}
          >
            {getPresentationOfData(element)}
          </Button>
        )
      })
    }
    return (
      <>
        {formPatern}
        <Button
          variant='primary'
          className='mx-1 my-1'
          onClick={() => {
            changParam(-1)
          }}
        >
          Prev
        </Button>
        <Button
          variant='primary'
          className='mx-1 my-1'
          onClick={() => {
            onClick(0)
          }}
        >
          Clear
        </Button>
        <Button
          variant='primary'
          className='mx-1 my-1'
          onClick={() => {
            changParam(1)
          }}
        >
          Next
        </Button>
        <Row> {buttonPatern}</Row>
      </>
    )
  }
} */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button } from 'react-bootstrap'
import {
  selectactivEntity,
  activEntity_changEntity,
  activEntity_changValue,
} from '../features/activEntity'
import {
  getProbableValuesForParam,
  getPresentationOfData,
} from '../utils/EditUtils'

function EditParam() {
  const dispatch = useDispatch()

  const activEntity = useSelector(selectactivEntity)
  const { idFild, value, name, inputMode } = activEntity

  const editOptions = getProbableValuesForParam(idFild)
  const formPatern = (
    <Form>
      <Form.Group as={Row} controlId='{idFild}'>
        <Form.Label column sm='4' xs='4'>
          {name}
        </Form.Label>
        <Col sm='8' xs='8'>
          <Form.Control
            plaintext
            readOnly
            placeholder={getPresentationOfData(value)}
          />
        </Col>
      </Form.Group>
    </Form>
  )
  let buttonPatern = []
  if (editOptions) {
    buttonPatern = editOptions.pValue.map((element) => {
      return (
        <Col xl='3' xs='3'>
          <Button
            block
            key={element}
            variant='primary'
            className='mx-1 my-1'
            onClick={() => {
              //console.log(element)
              dispatch(activEntity_changValue(element))
              if (inputMode !== 2) {
                dispatch(activEntity_changEntity(1))
              }
            }}
          >
            {getPresentationOfData(element)}
          </Button>
        </Col>
      )
    })
  }
  return (
    <>
      {formPatern}
      <Button
        variant='primary'
        className='mx-1 my-1'
        onClick={() => {
          dispatch(activEntity_changEntity(-1))
          //changParam(-1)
        }}
      >
        Prev
      </Button>
      <Button
        variant='primary'
        className='mx-1 my-1'
        onClick={() => {
          dispatch(activEntity_changValue(0, true))
        }}
      >
        Clear
      </Button>
      <Button
        variant='primary'
        className='mx-1 my-1'
        onClick={() => {
          dispatch(activEntity_changEntity(1))
        }}
      >
        Next
      </Button>
      <Row> {buttonPatern}</Row>
    </>
  )
}

export default EditParam
