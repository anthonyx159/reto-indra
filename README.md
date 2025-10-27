# Reto Técnico Indra - Frontend Developer

Aplicación web desarrollada con React para la gestión de seguros.

## 🚀 Tecnologías y Librerías Utilizadas

### Core Technologies
- **Vite**: Build tool de última generación que ofrece desarrollo ultra-rápido con HMR (Hot Module Replacement) instantáneo, optimización automática y tiempos de compilación superiores a webpack.

### Routing y Navegación
- **React Router DOM**: 
  - **Razón de selección**: Librería estándar de facto para navegación en aplicaciones React SPA, actualizada a la versión 7 con mejoras de rendimiento.
  - **Ventajas**: 
    - Manejo declarativo de rutas
    - Navegación programática
    - Parámetros dinámicos
  - **Uso en el proyecto**: Navegación entre listado (`/`).

### Gestión de Estado Global
- **@reduxjs/toolkit** + **React-Redux**: 
  - **Razón de selección**: 
    - Redux Toolkit es el enfoque oficial y moderno para trabajar con Redux
    - Elimina el boilerplate tradicional de Redux
    - Incluye herramientas esenciales preconfiguradas
  - **Ventajas**: 
    - `createSlice`: Simplifica la creación de reducers y actions
    - Redux DevTools integrado para debugging
    - RTK Query opcional para caché de datos
  - **Uso en el proyecto**: 
    - Gestión centralizada del estado de user y plans
    - Estados de loading y error
    - Actions asíncronas para peticiones HTTP

### Gestión de Formularios
- **React Hook Form**:
  - **Razón de selección**: Librería de alto rendimiento para manejo de formularios en React.
  - **Ventajas sobre soluciones tradicionales**:
    - Minimiza re-renders (mejor performance)
    - Validación integrada flexible
    - Fácil integración con componentes UI
    - Menor bundle size
  - **Uso en el proyecto**: 
    - Manejo del formulario de registro
    - Validación de inputs
    - Control optimizado de campos sin re-renders innecesarios

### Estilos y UI
- **Sass**: 
  - **Razón de selección**: Preprocesador CSS más maduro y poderoso del mercado.
  - **Ventajas**: 
    - Variables para mantener consistencia de diseño
    - Nesting para código más organizado y legible
    - Mixins para reutilización de estilos
    - Imports para mejor organización
  - **Uso en el proyecto**: 
    - Sistema de variables para colores, espaciados y tipografía
    - Mixins para responsive design
    - Estructura modular de estilos por componente
    - Temas y paleta de colores consistente

### 🎨 CSS Modules
  - **Razón de selección**: CSS Modules es una forma de escribir CSS donde los estilos tienen alcance local por defecto, evitando conflictos de nombres de clases.
  - **Ventajas**: 
    - Las clases no chocan entre componentes
    - No más conflictos de nombres globales
    - Clases programáticas

### Levantar el proyecto
  - **Usar node version 22**
  - **Instalar dependencias**
  - **Ejecutar `npm run dev`**
  - **Ejecutar `npm run previe`**: Ejecutar este codigo para ver un preview en producción

## División de tareas
  - **Se dividió las taras en x partes**: 
    - 1. Estructurado del proyecto
    - 2. Configuración del proyecto 
    - 3. Maquetación de la vista home y register mediante la componetización de interfaces
    - 4. Integración con los diferentes servicios
    - 5. Implementación de Librerías
    - 6. Deploying del proyecto en Github Pages
  