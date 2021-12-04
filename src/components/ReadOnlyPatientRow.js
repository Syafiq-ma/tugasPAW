import React from 'react'
import '../styles/patient.css'

const ReadOnlyPatientRow = ({ patient, handleEditClick, handleDeleteClick }) => {
    return (
            <tr className="table-data">
                <td>{patient.ownerName}</td>
                <td>{patient.petName}</td>
                <td>{patient.petType}</td>
                <td>{patient.homeAddress}</td>
                <td>{patient.phoneNumber}</td>
                <td>{patient.description}</td>
                <td>{patient.currentTreatments}</td>
                <td>
                    <button type="button" onClick={(event) => handleEditClick(event, patient)}>Edit</button>
                    <button type="button" onClick={(event) => handleDeleteClick(event, patient)}>Delete</button>
                </td>
            </tr>
    )
}


export default ReadOnlyPatientRow
