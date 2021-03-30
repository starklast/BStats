import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Col, Row } from 'react-bootstrap'
import {
  selectactivEntity,
  activEntity_activateFild,
} from '../features/activEntity'
import { getPresentationOfData } from '../utils/EditUtils'
import { selectdayItems } from '../features/dayItems'

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
            dispatch(activEntity_activateFild(id))
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

function EntityView() {
  const dispatch = useDispatch()
  const activEntity = useSelector(selectactivEntity)
  const { data, idFild } = activEntity
  const {
    value: { mHeadTitle },
  } = useSelector(selectdayItems)
  if (mHeadTitle) {
    return (
      <Form>
        <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[1], data, idFild, 4)}
          {paramPresentation(dispatch, mHeadTitle[2], data, idFild, 4)}
          {paramPresentation(dispatch, mHeadTitle[3], data, idFild, 4)}
        </Row>
        <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[4], data, idFild, 4)}
        </Row>
        {/* <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[5], data, idFild, 4)}
          {paramPresentation(dispatch, mHeadTitle[6], data, idFild, 4)}
          {paramPresentation(
            dispatch,
            { id: 'total', name: 'всего' },
            { total: data[mHeadTitle[5].id] + data[mHeadTitle[6].id], idFild }
          )}
        </Row>
        <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[7], data, idFild)}
          {paramPresentation(dispatch, mHeadTitle[8], data, idFild)}
          {paramPresentation(dispatch, mHeadTitle[9], data, idFild)}
        </Row>
        <Row className='border'>
          {paramPresentation(dispatch, mHeadTitle[10], data, idFild)}
          {paramPresentation(dispatch, mHeadTitle[11], data, idFild)}
          {paramPresentation(dispatch, mHeadTitle[12], data, idFild)}
        </Row>
        <Row className='border'>
          {paramPresentation(
            dispatch,
            { id: 'total', name: 'всего' },
            {
              total:
                data[mHeadTitle[7].id] +
                data[mHeadTitle[8].id] +
                data[mHeadTitle[9].id] +
                data[mHeadTitle[10].id] +
                data[mHeadTitle[11].id] +
                data[mHeadTitle[12].id],
            },
            idFild
          )}
          {paramPresentation(dispatch, mHeadTitle[13], data, idFild)}
        </Row> */}
      </Form>
    )
  }
  return <></>
}

export default EntityView
