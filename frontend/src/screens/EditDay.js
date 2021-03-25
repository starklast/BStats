import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DateSelector from '../components/Date'
import THeadFromMass from '../components/THeadFromMass'
import TDateFromMass from '../components/TDateFromMass'
import { Table } from 'react-bootstrap'
import EditParam from '../components/EditParam'
import { dayItems_Read } from '../features/dayItems'
import TablePanel from '../components/TablePanel'

/* export default class EditDay extends Component {

  render() {
    //console.log(editData)
    return (
      <>
        <DateSelector />
        <Table striped bordered hover>
          <THeadFromMass />
          <TDateFromMass />
        </Table>
        <EditParam />
      </>
    )
  }
} */

function EditDay() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dayItems_Read())
  })
  return (
    <>
      <DateSelector />
      <Table striped bordered hover>
        <THeadFromMass />
        <TDateFromMass />
      </Table>
      <TablePanel />
      <EditParam />
    </>
  )
}

export default EditDay

//<EditParam {...editData} />
//{editEntity && curentFild ? <EditParam {...editData} /> : <></>}
