import { Button, TextField, Switch, FormGroup, FormControlLabel } from "@mui/material"
import { useState } from "react";


function FormSigUp({ handleSubmit }) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'Deben ser al menos 3 caracteres',
        },
    });

    const [errorsLN, setErrorsLN] = useState({
        lastName: {
            errorLN: false,
            messageLN: 'Deben ser al menos 5 caracteres',
        },
    });

    const [errorsE, setErrorsE] = useState({
        email: {
            errorE: false,
            messageE: 'Ingresa un correo electronico valido',
        },
    })

    const validarNombre = (nombre) => {
        if(nombre.length >= 3){
            return{ 
                name: { 
                    error: false, 
                    message: ''
                },
            }
        }else{
            return{ 
                name: { 
                    error: true, 
                    message: 'Deben ser al menos 3 caracteres' 
                },
            }
        }
    }

    const validarLastName = (apellido) => {
        if(apellido.length >= 5){
            return{
                lastName: {
                    errorLN: false, 
                    messageLN: '',
                },
            }
        }else{
            return{
                lastName: {
                    errorLN: true, 
                    messageLN: 'Deben ser al menos 5 caracteres',
                },
            }
        }
    }

    const validarEmail = (correo) => {
        if(correo.length >= 10){
            return{
                email: {
                    errorE: false, 
                    messageE: '',
                },
            }
        }else{
            return{
                email: {
                    errorE: true, 
                    messageE: 'Ingresa un correo electronico valido',
                },
            }
        }
    }

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                    name, 
                    lastName, 
                    email, 
                    prom, 
                    nov,
                })
            }}
        >
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
                error={ errors.name.error }
                helperText={ errors.name.error ? errors.name.message : "" }
                onBlur={(e) => {
                    setErrors(
                        validarNombre(e.target.value)) 
                }}
            />
            <TextField 
                id="lastname" 
                label="Apellidos" 
                variant="outlined" 
                fullWidth
                margin="normal"
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                value={ lastName }
                error={ errorsLN.lastName.errorLN }
                helperText={ errorsLN.lastName.errorLN ? errorsLN.lastName.messageLN : "" }
                onBlur={(e) => {
                    setErrorsLN(
                        validarLastName(e.target.value)
                    )
                }}
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
                value={ email }
                error={ errorsE.email.errorE }
                helperText={ errorsE.email.errorE ? errorsE.email.messageE : '' }
                onBlur={(e) => {
                    setErrorsE(
                        validarEmail(e.target.value)
                    )
                }}
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