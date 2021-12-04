import React, {useState} from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Grid, TextField, Button, Card, CardContent, Typography} from '@material-ui/core';
import Axios from 'axios'
import { useNavigate } from 'react-router';

const QueueAdd = () => {

    let navigate = useNavigate()

    const [queueValue, setQueueValue] = useState({
        ownerName: "", 
        date: "", 
        petName: "", 
        petType: "", 
        homeAddress: "", 
        phoneNumber: ""
    });

    const handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setQueueValue(values => ({...values, [name]: value}));
    };

    function addQueue(e){
        e.preventDefault()
        Axios.post("http://localhost:3000/api/queue", queueValue)
        .then(response=>{
            if(response.data === "Create successful"){
                alert(response.data)
                navigate('/queue')
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
                    Add Queue
                </Typography>  
                

                    <form onSubmit={addQueue}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <TextField id="datetime-local" name="date"
                        InputLabelProps={{shrink: true,}}
                        placeholder="Date" label="Date" variant="standard" fullWidth required type="date" 
                        onChange= {e => handleChange(e)} />
                        </Grid>

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
                        
                        <Button type="submit" onClick={addQueue} variant="contained" color="primary" value="QUEUEDETAILS" fullWidth style={{ backgroundColor: '#00CC99', color: '#FFFFFF', textTransform: 'none'}}>
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

export default QueueAdd
