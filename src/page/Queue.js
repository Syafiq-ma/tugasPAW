import React, { useState, Fragment, useEffect, SetState } from 'react'
import Axios from 'axios'
import '../styles/Queue.css'
import ReadOnlyQueueRow from '../components/ReadOnlyQueueRow'
import EditableQueueRow from '../components/EditableQueueRow'
import Navbar from '../components/Navbar'
import QueueAdd from '../components/QueueAdd'
import { Link } from 'react-router-dom';


const Queue = () =>  {


const queueApiPath = "http://localhost:3000/api/queue"

const [queueData, setQueueData] = useState([])

const[queueAdd, setQueueAdd] = useState(false)

const [editFormData, setEditFormData] = useState({
    date: "",
    ownerName: "",
    petName: "",
    petType: "",
    homeAddress: "",
    phoneNumber: ""
})

const [editQueueId, setEditQueueId] = useState(null)

const handleEditFormChange = (event) =>{
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    setEditFormData((values)=>({...values, [name]:value}))
}

const handleEditFormSubmit = (event) => {
    event.preventDefault()
    Axios.put(queueApiPath,{
        _id: editQueueId,
        date: editFormData.date,
        ownerName: editFormData.ownerName,
        petName: editFormData.petName,
        petType: editFormData.petType,
        homeAddress: editFormData.homeAddress,
        phoneNumber: editFormData.phoneNumber
    })
    .then((response)=>{
        window.alert(response.data)
        Axios.get(queueApiPath)
        .then(response=>{
            setQueueData(response.data)
            setEditQueueId(null)
        })
    })
    
}

const handleCancelClick = (event) => {
    event.preventDefault()
    setEditQueueId(null)
}

const handleEditClick = (event, queue) => {
    event.preventDefault()
    setEditQueueId(queue._id)
    setEditFormData({
        date: queue.date,
        ownerName: queue.ownerName,
        petName: queue.petName,
        petType: queue.petType,
        homeAddress: queue.homeAddress,
        phoneNumber: queue.phoneNumber
    })
}

const handleDeleteClick = (event, queue) => {
    event.preventDefault()
    Axios.delete(queueApiPath,{
        data:{ _id: queue._id}
    })
    .then((response)=>{
        window.alert(response.data)
        Axios.get(queueApiPath)
        .then(response=>{
            setQueueData(response.data)
        })
    })
}

const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal);
};



useEffect(()=>{
    Axios.get(queueApiPath)
        .then(response=>{
            setQueueData(response.data)
        })
},[])

    
    return (
        <div className="main">
            <Navbar/>
            <h1>Daftar Antrian</h1>
            
            <Link className="add-button" to="/queue/add"> Add Queue</Link>
            {queueAdd? <QueueAdd />: console.log()}
            <div className="container" >
                <form onSubmit={handleEditFormSubmit}>
                    <table cellSpacing="0">
                        <thead>
                            <tr className="table-header" >
                                <td>Date</td>
                                <td>Owner Name</td>
                                <td>Pet Name</td>
                                <td>Pet Type</td>
                                <td>Home Address</td>
                                <td>Phone Number</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {queueData.map((queue) => (
                                <Fragment>
                                    {editQueueId === queue._id?(
                                        <EditableQueueRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    ):(
                                        <ReadOnlyQueueRow queue={queue} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Queue
