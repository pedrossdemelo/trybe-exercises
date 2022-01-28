const bodyParser = require('body-parser');
const { Patient, Plan, Surgery, PatientSurgeries } = require('./models');
const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: [{ model: Plan, as: 'plan' }],
    });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});