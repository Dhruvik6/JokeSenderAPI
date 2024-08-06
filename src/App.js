import React from 'react';
import Container from '@mui/material/Container';
import Background from './Background';
import SnackbarAlert from './SnackbarAlert';
import Header from './Header';
import JokeSender from './JokeSender';
import './Home.css';

function App() {
  const [state, setState] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState(false);
  };

  return (
    <div className='background' style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Background />
      <div className="content" style={{ position: 'relative', zIndex: 1 }}>
        <SnackbarAlert open={state} severity={severity} message={message} handleClose={handleClose} />
        <Container maxWidth="lg">
          <Header />
          <JokeSender setState={setState} setMessage={setMessage} setSeverity={setSeverity} />
        </Container>
      </div>
    </div>
  );
}

export default App;
