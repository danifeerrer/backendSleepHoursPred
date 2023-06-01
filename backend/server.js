const express = require("express")
const { spawn } = require('child_process');
const cors = require('cors');


const app = express()

app.use(cors());
app.use(express.json());


app.get('/api/data', (req, res) => {
    const data = {
      message: 'Hello from the backend server!'
    };
  
    res.json(data);
  });

app.get('/api/invoke-python', (req, res) => {
    const dataToPassIn = ['Send this to Python script'];
  
    console.log('Data sent to Python script:', dataToPassIn);
  
    const pythonprocess = spawn('python', ['C:\\Users\\ferre\\Documents\\react_python\\programpy.py', JSON.stringify(dataToPassIn)]);

    pythonprocess.stdout.on('data', (data) => {
        console.log('Data received from python script: ', JSON.parse(data.toString()));
    });
});


app.post('/api/py', (req, res) => {
  const { input1, input2, input3 } = req.body;

  const pythonprocess = spawn('python', [
    'C:\\Users\\ferre\\Documents\\react_python\\programpy.py',
    (input1),
    (input2),
    (input3)
  ]);

  let outputData = '';

  pythonprocess.stdout.on('data', (data) => {
    outputData += data.toString();
  });

  pythonprocess.stderr.on('data', (error) => {
    console.error('Error executing Python script:', error.toString());
    res.status(500).json({ error: 'An error occurred while processing the data.' });
  });

  pythonprocess.on('close', (code) => {
    if (code === 0) {
      try {
        const output = JSON.parse(outputData);
        console.log('Data received from python script: ', output);
        res.json(output);
      } catch (error) {
        console.error('Error parsing output data:', error);
        res.status(500).json({ error: 'An error occurred while processing the data.' });
      }
    } else {
      console.error('Python script exited with non-zero code:', code);
      res.status(500).json({ error: 'An error occurred while processing the data.' });
    }
  });
});

  

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});