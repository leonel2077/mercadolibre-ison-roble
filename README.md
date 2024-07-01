# Open Market

Open Market es una aplicación web de comercio electrónico que permite a los usuarios buscar productos, ver detalles de los productos, añadir productos a su carrito y realizar compras. Utiliza la API de Mercado Libre para obtener la información de los productos.

## Características

- Página de inicio con productos destacados.
- Barra de navegación con búsqueda de productos.
- Vista de detalles del producto con opción para agregar al carrito.
- Vista del carrito con opción para modificar la cantidad de productos, eliminar productos y realizar la compra.
- Persistencia del carrito en `localStorage`.

## Tecnologías Utilizadas

- React
- PrimeReact
- React Router
- Mercado Libre API

## Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:leonel2077/mercadolibre-ison-roble.git
2. Navega al directorio del proyecto:
   ```bash
   cd mercadolibre-ison-roble
3. Instala las dependencias:
   ```bash
   npm install

## Uso
1. Inicia la aplicación
   ```bash
   npm start
2. Abre tu navegador y visita http://localhost:3000.

## Estructura del Proyecto

- `src/components`: Contiene los componentes reutilizables como `Navbar`, `SearchBar`, `ProductCard`, `Cart`, etc.
- `src/pages`: Contiene las páginas principales del proyecto como `HomePage`, `ProductDetailPage`, y `CartPage`.
- `src/contexts`: Contiene los contextos para manejar el estado global de la aplicación, como `CartContext` y `SearchContext`.
- `src/App.js`: Configura las rutas de la aplicación.
- `src/index.js`: Punto de entrada principal de la aplicación.

## Contextos

### CartContext

El `CartContext` maneja el estado del carrito de compras. Permite añadir, actualizar y eliminar productos del carrito, así como calcular el subtotal.

### SearchContext

El `SearchContext` maneja el estado de la búsqueda de productos. Permite realizar búsquedas de productos utilizando la API de Mercado Libre.

## Componentes Principales

### Navbar

La barra de navegación incluye el nombre de la empresa, una barra de búsqueda y un ícono de carrito con un contador de productos. Permite realizar búsquedas y navegar a la página del carrito.

### ProductCard

Las tarjetas de productos muestran información básica del producto, como la imagen, el título y el precio. Incluyen un botón para ver más detalles.

### Cart

El componente del carrito muestra los productos añadidos al carrito, permite modificar las cantidades, eliminar productos y realizar la compra.


