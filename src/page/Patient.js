import React, { useState, Fragment, useEffect } from 'react'
import Axios from 'axios'
import '../styles/patient.css'
import ReadOnlyPatientRow from '../components/ReadOnlyPatientRow'
import EditablePatientRow from '../components/EditablePatientRow'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

const Patient = () =>  {

const patientsApiPath = "http://localhost:3000/api/patients"

const [patientsData, setPatientsData] = useState([])
const [patientsDataFiltered, setPatientsDataFiltered] = useState([])

const [editFormData, setEditFormData] = useState({
    ownerName: "",
    petName: "",
    petType: "",
    homeAddress: "",
    phoneNumber: "",
    description: "",
    currentTreatments: ""
})

const [editPatientsId, setEditPatientsId] = useState(null)

const handleEditFormChange = (event) =>{
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    setEditFormData((values)=>({...values, [name]:value}))
}

const handleEditFormSubmit = (event) => {
    event.preventDefault()
    Axios.put(patientsApiPath,{
        _id: editPatientsId,
        ownerName: editFormData.ownerName,
        petName: editFormData.petName,
        petType: editFormData.petType,
        homeAddress: editFormData.homeAddress,
        phoneNumber: editFormData.phoneNumber,
        description: editFormData.description,
        currentTreatments: editFormData.currentTreatments
    })
    .then((response)=>{
        window.alert(response.data)
        Axios.get(patientsApiPath)
        .then(response=>{
            setPatientsData(response.data)
            setEditPatientsId(null)
        })
    })
    
}

const handleCancelClick = (event) => {
    event.preventDefault()
    setEditPatientsId(null)
}

const handleEditClick = (event, patient) => {
    event.preventDefault()
    setEditPatientsId(patient._id)
    setEditFormData({
        ownerName: patient.ownerName,
        petName: patient.petName,
        petType: patient.petType,
        homeAddress: patient.homeAddress,
        phoneNumber: patient.phoneNumber,
        description: patient.description,
        currentTreatments: patient.currentTreatments
    })
}

const handleDeleteClick = (event, patient) => {
    event.preventDefault()
    Axios.delete(patientsApiPath,{
       data:{ _id: patient._id}
    })
    .then((response)=>{
        window.alert(response.data)
        Axios.get(patientsApiPath)
        .then(response=>{
            setPatientsData(response.data)
        })
    })
}

useEffect(()=>{
    Axios.get(patientsApiPath)
        .then(response=>{
            setPatientsData(response.data)
        })
},[])

    const [Input,setInput] = useState('')
    const updateInput = (event) => {
        setInput(event.target.value)
        const filtered = patientsData.filter(patient => {
            return patient.ownerName.toLowerCase().includes(Input.toLowerCase())
           })
           setPatientsDataFiltered(filtered);
    }
    return (
        <div className="main">
            <Navbar/>
            <h1>Daftar Pasien</h1>
            <Link className="add-button" to="/patients/add"> Add Patient</Link>
            <input className="searchBar"value={Input} placeholder='Search by owner name...' onChange={e => updateInput(e)}></input>
            <div className="container" >
                <form onSubmit={handleEditFormSubmit}>
                    <table cellSpacing="0">
                        <thead>
                            <tr className="table-header" >
                                <td>Owner Name</td>
                                <td>Pet Name</td>
                                <td>Pet Type</td>
                                <td>Home Address</td>
                                <td>Phone Number</td>
                                <td>Description</td>
                                <td>Treatments</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {Input?patientsDataFiltered.map((patient) => (
                                <Fragment>
                                    {editPatientsId === patient._id?(
                                        <EditablePatientRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    ):(
                                        <ReadOnlyPatientRow patient={patient} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                                    )}
                                </Fragment>
                            )):patientsData.map((patient) => (
                                <Fragment>
                                    {editPatientsId === patient._id?(
                                        <EditablePatientRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    ):(
                                        <ReadOnlyPatientRow patient={patient} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
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

export default Patient
