import  app  from './app'
import appDataSource from './database/data-source';

appDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000 🚀')
        })
        console.log('Conexão com Postgres feita com sucesso 📦');
    })
    .catch((err) => {
        console.log('Conexão com banco falhou. Confira o erro: ', err);
    })











