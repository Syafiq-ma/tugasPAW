import React from 'react'

const EditableQueueRow = ({ editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                    type="datetime-local" required="required" 
                    name="date" onChange={handleEditFormChange}
                    value={editFormData.date}
                ></input>
            </td>
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
                <button type="submit">Save</button>
                <button type="button" onClick={(event)=>handleCancelClick(event)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableQueueRow
