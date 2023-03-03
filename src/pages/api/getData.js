
import { executeQuery } from '../../../lib/db';

export default async function getData(req, res) {

    try {
        // Consulta SQL
        const result = await executeQuery('SELECT * FROM usuariosPrograma');

        // Imprimir los resultados por consola
        console.log(result);
        res.status(200).json({ results: result})
    } catch (err) {
        // Manejo de errores
        console.error(err);
    }

   

}
