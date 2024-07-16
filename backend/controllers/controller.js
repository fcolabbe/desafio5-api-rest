import { models } from "../models/queries.js";

const prepararHATEOAS = (joyas) => {
    const results = joyas.map((m) => {
        return {
            name: m.nombre,
            href: `/joyas/joya/${m.id}`,
        }
    }).slice(0, 4)
    const total = joyas.length
    const HATEOAS = {
        total,
        results
    }
    return HATEOAS
}

const notFound = (req, res) => {

    res.status(404).send("Not found");
}

const home = (req, res) => {
    res.send("Hello World desde controller");
};

const getJoyas = async (req, res) => {
    try {
        const { limits, order_by, page } = req.query
        const response = await models.getJoyas({ limits, order_by, page })
        const HATEOAS = await prepararHATEOAS(response)
        return res.status(200).json({ HATEOAS });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getJoyasPorFiltros = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query
        const response = await models.getJoyasPorFiltros({ precio_max, precio_min, categoria, metal })

        res.status(200).send(response);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const controllers = {
    notFound,
    home,
    getJoyas,
    getJoyasPorFiltros
}