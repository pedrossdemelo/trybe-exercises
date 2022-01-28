const bodyParser = require('body-parser');
const { Patient, Plan, Surgery, PatientSurgeries } = require('./models');
const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', async (req, res) => {
  const { includePlan, includeSurgeries } = req.query;
  if (includePlan) {
    try {
      const patients = await Patient.findAll({
        include: [
          {
            model: Plan,
            as: 'plan',
          },
        ],
      });
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  if (includeSurgeries) {
    try {
      const patients = await Patient.findAll({
        include: [
          {
            model: Surgery,
            as: 'surgeries',
            through: {
              attributes: []
            }
          },
        ],
      });
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});