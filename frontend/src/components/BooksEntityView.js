import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Col, Row } from 'react-bootstrap'
import {
  selectactivEntity,
  activEntity_activateFild,
} from '../features/activEntity'
import { getPresentationOfData } from '../utils/EditUtils'
import { selectBooksDayItems } from '../features/booksDayItems'
import { DATA_TYPE_BOOKS_DATA } from '../constants/Constats'

const paramPresentation = (
  dispatch,
  mHeadTitleItem,
  DataItem,
  idFild,
  xLabel = 2,
  xValue = 2
) => {
  const { id, name } = mHeadTitleItem
  const value = DataItem[id]
  const classBorder = idFild === id ? 'text-primary' : ''

  return (
    <>
      <Col>
        <Form.Label
          className={classBorder}
          onClick={() => {
            dispatch(activEntity_activateFild(id, DATA_TYPE_BOOKS_DATA))
          }}
        >
          {name}
        </Form.Label>
      </Col>
      <Col>
        <Form.Control
          plaintext
          readOnly
          placeholder={getPresentationOfData(value)}
        />
      </Col>
    </>
  )
}

const BooksEntityView = () => {
  const dispatch = useDispatch()
  const activEntity = useSelector(selectactivEntity)
  const { data, idFild } = activEntity
  const {
    value: { mHeadTitle },
  } = useSelector(selectBooksDayItems)
  if (mHeadTitle) {
    return (
      <Form>
        <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[2], data, idFild, 4)}
          {paramPresentation(dispatch, mHeadTitle[3], data, idFild, 4)}
        </Row>
        <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[4], data, idFild, 4)}
          {paramPresentation(dispatch, mHeadTitle[5], data, idFild, 4)}
        </Row>
      </Form>
    )
  }
  return <></>
}

export default BooksEntityView
