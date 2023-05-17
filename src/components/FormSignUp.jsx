import { Button, TextField, Switch, FormGroup, FormControlLabel } from "@mui/material"
import { useState } from "react";


function FormSigUp({ handleSubmit }) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({
                name, 
                lastName, 
                email, 
                prom, 
                nov,
            })
        }}>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth
                margin="normal"
                onChange={ (e) => {
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
                onChange={ (e) => {
                    setLastName(e.target.value);
                }}
                value={ lastName }
            />
            <TextField 
                id="email" 
                label="E-mail" 
                variant="outlined" 
                fullWidth
                margin="normal"
                onChange={ (e) => {
                    setEmail(e.target.value);
                }}
                value={email}
            />
            <FormGroup>
                <FormControlLabel 
                    control={ 
                        <Switch 
                            checked={ prom } 
                            onChange={(e) => setProm(
                                e.target.checked)
                            } 
                        /> 
                    } 
                    label="Promociones" 
                />
                <FormControlLabel 
                    control={ 
                        <Switch 
                            checked={ nov } 
                            onChange={(e) => setNov(
                                e.target.checked)
                            }
                        /> 
                    } 
                    label="Novedades" 
                />
            </FormGroup>
            <Button 
                variant="contained"
                type="submit"
            >
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