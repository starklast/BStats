/* export default class DateSelector extends Component {
  constructor(props) {
    super(props)
    
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    const separator = '-'
    const currentDate = `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`
    this.state = {
      date: currentDate,
    }
    this.dateChange = this.dateChange.bind(this)
    console.log(this.state.date.toLocaleString())
  }
  dateChange(event) {
    this.setState({ date: event.target.value })
    //console.log(event.target.value)
    this.props.onChange(event.target.value)
  }
  
  render() {
    const date = useSelector(selectData)
    const dispatch = useDispatch()
    return (
      <Form>
      <Form.Group controlId='formDate'>
      <Form.Row>
      <Form.Label column xs={2} lg={1}>
      Date:
      </Form.Label>
      <Col xs={10}>
      <Form.Control
      type='date'
      value={this.state.date.toLocaleString()}
      onChange={() => {
        dispatch(changeData(event.target.value))
        this.dateChange(event)
      }}
      />
      </Col>
      </Form.Row>
      </Form.Group>
      </Form>
      )
    }
  }
  */
import React from 'react'
import { Form, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { reqChangeDate, selectDate } from '../features/date'

function DateSelector(props) {
  const date = useSelector(selectDate)
  const dispatch = useDispatch()

  return (
    <Form>
      <Form.Group controlId='formDate'>
        <Form.Row>
          <Form.Label column xs={2} lg={1}>
            Date:
          </Form.Label>
          <Col xs={10}>
            <Form.Control
              type='date'
              value={date}
              onChange={(event) => {
                dispatch(reqChangeDate(event.target.value))
              }}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  )
}

export default DateSelector
