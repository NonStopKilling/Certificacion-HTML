  const express = require('express');
   const app = express();
   const port = 3000;

   app.set('view engine', 'pug');
   app.set('views', './views'); // Carpeta donde están tus archivos Pug

   app.get('/', (req, res) => {
     res.render('index', { title: 'Página Principal', urlHomepage: '/' });
   });

   app.listen(port, () => {
     console.log(`Servidor escuchando en el puerto ${port}`);
   });