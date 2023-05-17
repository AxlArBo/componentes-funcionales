import { Button, TextField, Switch, FormGroup, FormControlLabel } from "@mui/material"
import { useState, useEffect } from "react";


function FormSigUp() {
    const [name, setName] = useState('');
    
    useEffect(() => {
        console.log('Name cambio: ', name)
    }, [name])

    return (
        <form>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth
                margin="normal"
                onChange={ (e) => {
                    console.log(e.target.value);
                    setName(e.target.value)
                }}
                value={ name }
            />
            <TextField 
                id="lastname" 
                label="Apellidos" 
                variant="outlined" 
                fullWidth
                margin="normal"
            />
            <TextField 
                id="email" 
                label="E-mail" 
                variant="outlined" 
                fullWidth
                margin="normal"
            />
            <FormGroup>
                <FormControlLabel control={ <Switch defaultChecked /> } label="Promociones" />
                <FormControlLabel control={ <Switch defaultChecked /> } label="Novedades" />
            </FormGroup>
            <Button variant="contained">
                Registrarse
            </Button>
        </form>
    )
}

export default FormSigUp

/*const FormSigUp2 = () => {
    return <form>
        <input type="text" />
        <button>Registrarse 2</button>
    </form>
}

export default FormSigUp2*/