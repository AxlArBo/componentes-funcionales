import './App.css';
import FormSigUp from './components/FormSignUp';
import { Container, Typography } from '@mui/material';

function App() {
  const handleSubmit = (valores) => {
    console.log('app.js: ', valores)
  }

  return (
    <Container component={"section"} maxWidth="sm">
      <Typography variant='h3' align='center' component={'h1'}>Formulario registro</Typography>
      <FormSigUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
