import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function JokeSender({ setState, setMessage, setSeverity }) {
  const sendJoke = async (url, successMessage, errorMessage) => {
    const email = document.getElementById('email').value;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      setSeverity('success');
      setMessage(successMessage);
      setState(true);
    } else {
      setSeverity('error');
      setMessage(errorMessage);
      setState(true);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: '999px' }}
        onClick={() => sendJoke(
          'https://y86ysgzha6.execute-api.us-east-1.amazonaws.com/getRandomJokes',
          'Joke sent successfully!',
          'There was an error sending the joke!'
        )}
      >
        Send Random Joke
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: '999px' }}
        onClick={() => sendJoke(
          'https://y86ysgzha6.execute-api.us-east-1.amazonaws.com/getTenRandomJokes',
          '10 Jokes sent successfully!',
          'There was an error sending the jokes!'
        )}
      >
        Send 10 Random Jokes
      </Button>
    </Box>
  );
}

export default JokeSender;
