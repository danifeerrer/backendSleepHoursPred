<h1> Backend Folder Readme </h1>
This folder contains the backend code for a web application. It consists of a single JavaScript file named server.js that serves as the backend server. The server.js file uses the Express.js framework and the Child Process library to communicate with a Python script.

<h3> Prerequisites </h3>
Before running the backend server, ensure that the following dependencies are installed:

Node.js (v10.0.0 or higher)
Python (v3.0 or higher)

<h3> Installation </h3>
Clone the repository to your local machine.

Navigate to the backend folder using the command line.

Run the following command to install the required Node.js packages:

npm install

<h3> Running the Server </h3> 
To start the backend server, follow these steps:

Open a terminal or command prompt.

Navigate to the backend folder.

Run the following command:

node server.js
This will start the server and display a message indicating that it is running on port 5000.

<h4> API Endpoints </h4>
The backend server provides the following API endpoints:

<h5> GET /api/data </h5>
Returns a JSON response with a message: "Hello from the backend server!"
<h5> GET /api/invoke-python </h5>
Invokes a Python script by spawning a child process.
Sends data to the Python script as a command-line argument.
The Python script path is hardcoded as C:\\Users\\ferre\\Documents\\react_python\\programpy.py.
The data to pass to the Python script is logged to the console.
The response from the Python script is logged to the console.

<h5> POST /api/py </h5>

Accepts a JSON payload containing input1, input2, and input3 in the request body.
Invokes a Python script by spawning a child process.
Sends input1, input2, and input3 as command-line arguments to the Python script.
The Python script path is hardcoded as C:\\Users\\ferre\\Documents\\react_python\\programpy.py.
Captures the output from the Python script and sends it as a JSON response.
If there is an error executing the Python script, an appropriate error message is returned.
Configuration
If you need to modify the paths to the Python script or make any other configuration changes, you can do so by editing the server.js file.

Note
Make sure the Python script specified in the code exists at the given path before running the server. Additionally, ensure that the Python script is compatible with the command-line arguments it receives.

If you encounter any issues or errors while using the backend server, please refer to the error messages in the console output for troubleshooting.
