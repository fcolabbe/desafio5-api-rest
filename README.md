# My Precious Spa - API de Tienda de Joyas

Este proyecto es una API REST moderna y dinámica para My Precious Spa, una tienda de joyas que está haciendo la transición de una aplicación de escritorio a una solución basada en web. La API proporciona endpoints eficientes, mantenibles y efectivos para satisfacer las necesidades específicas de los usuarios de la tienda.

## Características

- Límite de recursos
- Filtrado de recursos por campos
- Paginación
- Ordenamiento
- Estructura de datos HATEOAS

## Tecnologías Utilizadas

- Node.js
- Express.js
- PostgreSQL

## Configuración

1. Clona este repositorio
2. Instala las dependencias: `npm install`
3. Configura la base de datos PostgreSQL utilizando el script SQL proporcionado
4. Configura la conexión a la base de datos en `config/database.js`
5. Inicia el servidor: `npm start`

## Endpoints de la API

### GET /joyas

Devuelve una estructura HATEOAS de todas las joyas almacenadas en la base de datos.

Parámetros de consulta:
- `limits`: Limita la cantidad de joyas a devolver por página
- `page`: Define la página
- `order_by`: Ordena las joyas (ejemplo: `stock_ASC`)

Ejemplo:
```
GET /joyas?limits=3&page=2&order_by=stock_ASC
```

### GET /joyas/filtros

Filtra las joyas basándose en varios criterios.

Parámetros de consulta:
- `precio_max`: Filtra las joyas con un precio menor al valor especificado
- `precio_min`: Filtra las joyas con un precio mayor al valor especificado
- `categoria`: Filtra las joyas por categoría
- `metal`: Filtra las joyas por tipo de metal

Ejemplo:
```
GET /joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata
```

## Manejo de Errores

La API implementa bloques try-catch para capturar y manejar posibles errores durante las consultas y la ejecución de la lógica de las rutas.

## Seguridad

- Se utilizan consultas parametrizadas para prevenir ataques de inyección SQL.
- Se implementa middleware personalizado para generar informes de actividades o eventos específicos que ocurren en cada ruta.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT 