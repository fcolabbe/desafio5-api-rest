import { pool } from '../config/db.js';
import format from 'pg-format'

const getJoyas = async ({ limits = 2, order_by = "id_ASC", page = 1 }) => {
    try {
        const [campo, direccion] = order_by.split("_")
        const offset = (page - 1) * limits
        const queryFormateada = format("SELECT * FROM inventario order by %s %s LIMIT %s  OFFSET %s", campo, direccion, limits, offset)
        const response = await pool.query(queryFormateada);
        if (response.rowCount > 0) {
            return response.rows;
        }
    } catch (error) {
        console.error('Error fetching data', error.message);
    }
};

const getJoyasPorFiltros = async ({ precio_max, precio_min, categoria, metal }) => {
    try {
        // Implementar query con filtros
        const values = []
        let filtros = []

        const agregarFiltro = (campo, comparador, valor) => {
            values.push(valor)
            const { length } = filtros
            filtros.push(`${campo} ${comparador} $${length + 1}`)
        }

        if (precio_max) agregarFiltro('precio', '<=', precio_max)
        if (precio_min) agregarFiltro('precio', '>=', precio_min)
        if (categoria) agregarFiltro('categoria', '=', categoria)
        if (metal) agregarFiltro('metal', '=', metal)
        let consulta = "SELECT * FROM inventario"
        if (filtros.length > 0) {
            filtros = filtros.join(" AND ")
            consulta += ` WHERE ${filtros}`
        }
        const response = await pool.query(consulta, values);
        if (response.rowCount > 0) {
            return response.rows;
        }
    } catch (error) {
        console.error('Error fetching data', error.message);
    }
};

export const models = {
    getJoyas,
    getJoyasPorFiltros

}