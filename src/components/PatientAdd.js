import React, {useState} from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Axios from 'axios'
import { useNavigate } from 'react-router';


const PatientAdd = () => {

    let navigate = useNavigate()

    const [patientValue, setPatientValue] = useState({
        ownerName: "", 
        petName: "", 
        petType: "", 
        homeAddress: "", 
        phoneNumber: "",
        description : "",
        currentTreatments : ""

    });

    const handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setPatientValue(values => ({...values, [name]: value}));
    };

    function addPatient(e){
        e.preventDefault()
        Axios.post("https://tugaspawapi.herokuapp.com/api/patients", patientValue)
        .then(response=>{
            if(response.data === "Create successful"){
                alert(response.data)
                navigate('/patients')
            }
        })

    }

    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif',
          ].join(','),
        },});

      

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    Add Patient
                </Typography>  
                

                    <form onSubmit={addPatient}>
                    <Grid container spacing={1}>

                        <Grid item xs={12}>
                        <TextField id="ownerName" name="ownerName" placeholder="Enter Owner Name" label="Owner Name" variant="standard" 
                        onChange= {e => handleChange(e)} fullWidth required  />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petName" name="petName" placeholder="Enter Pet Name" label="Pet Name" variant="standard" 
                        onChange= {e => handleChange(e)} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petType" name="petType" placeholder="Enter Pet Type" label="Pet Type" variant="standard" 
                        onChange= {e => handleChange(e)} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="homeAddress" name="homeAddress" placeholder="Enter Home Address" label="Home Address" variant="standard" 
                        onChange= {e => handleChange(e)}fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" label="Phone Number" variant="standard" 
                        onChange= {e => handleChange(e)} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="description" name="description" placeholder="Enter Description" label="Description" variant="standard" 
                        onChange= {e => handleChange(e)} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="currentTreatments" name="currentTreatments" placeholder="Enter Treatments" label="Treatments" variant="standard" 
                        onChange= {e => handleChange(e)} fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <Button type="submit" onClick={addPatient} variant="contained" color="primary" value="PATIENTDETAILS" fullWidth style={{ backgroundColor: '#00CC99', color: '#FFFFFF', textTransform: 'none'}}>
                            <Typography>Add</Typography></Button>
                        </Grid>

                    </Grid>
                    </form>
                </CardContent>
                </Card>
            </Grid>
            </ThemeProvider>
        </div>
    )
}

export default PatientAdd
