import express from 'express';
import PlantRouter from './PlantRouter'

const app = express();
app.use(express.json());

app.use('/plants', PlantRouter)

app.listen(3000, () => console.log('Server started on port 3000'));