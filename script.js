/* General Styles */
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Container */
.container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
}

/* Form */
#validator-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: #007bff;
}

/* Buttons */
button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

#check-btn {
  background: #28a745;
  color: white;
}

#check-btn:hover {
  background: #218838;
}

#clear-btn {
  background: #dc3545;
  color: white;
}

#clear-btn:hover {
  background: #c82333;
}

/* Results */
#results-div {
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}

.results-text {
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.results-text.valid {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.results-text.invalid {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

