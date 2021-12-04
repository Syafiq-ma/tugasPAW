import React from 'react'

const EditablePatientRow = ({ editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                    type="text" required="required" 
                    name="ownerName" onChange={handleEditFormChange}
                    value={editFormData.ownerName}
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="petName" onChange={handleEditFormChange}
                    value={editFormData.petName}
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="petType" onChange={handleEditFormChange}
                    value={editFormData.petType}
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="homeAddress" onChange={handleEditFormChange}
                    value={editFormData.homeAddress}
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="phoneNumber" onChange={handleEditFormChange}
                    value={editFormData.phoneNumber}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="description" onChange={handleEditFormChange}
                    value={editFormData.description}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="currentTreatments" onChange={handleEditFormChange}
                    value={editFormData.currentTreatments}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={(event)=>handleCancelClick(event)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditablePatientRow
