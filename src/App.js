import './App.css';
import FormSigUp from './components/FormSignUp';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container component={"section"} maxWidth="sm">
      <Typography variant='h3' align='center' component={'h1'}>Formulario registro</Typography>
      <FormSigUp />
    </Container>
  );
}

export default App;
