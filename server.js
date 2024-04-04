const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.post('/api/submit-form', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: 'Form submitted successfully', formData }); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
