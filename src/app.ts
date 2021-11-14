import express from 'express';
import usuariosRoutes from './routes/usuarios';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


usuariosRoutes(app);

app.get('/prueba', async (req, res) => {
res.send('Prueba del servidor');

});

app.listen(port, () => {
return console.log(`server is listening on port ${port}`);
});
