import React from 'react'
import '../styles/Queue.css'

const ReadOnlyQueueRow = ({ queue, handleEditClick, handleDeleteClick }) => {
    return (
            <tr className="table-data">
                <td>{queue.date}</td>
                <td>{queue.ownerName}</td>
                <td>{queue.petName}</td>
                <td>{queue.petType}</td>
                <td>{queue.homeAddress}</td>
                <td>{queue.phoneNumber}</td>
                <td>
                    <button onClick={(event) => handleEditClick(event, queue)}>Edit</button>
                    <button onClick={(event) => handleDeleteClick(event, queue)}>Delete</button>
                </td>
            </tr>
    )
}


export default ReadOnlyQueueRow
