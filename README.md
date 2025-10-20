# 🚀 react-ts-essentials

**`react-ts-essentials`** es un proyecto _showcase_ (`demostración`) minimalista y enfocado, construido con **React y TypeScript**, cuyo objetivo es ilustrar la correcta implementación y los patrones fundamentales de una aplicación moderna. Sirve como un recurso de referencia y prueba de conocimiento sobre la gestión de tipos, la composición de componentes, la reutilización de lógica (Hooks) y las mejores prácticas en el ecosistema React-TS.

---

## 🎯 Objetivos Clave del Proyecto

Este proyecto está diseñado para demostrar las siguientes habilidades y conceptos esenciales en una entrevista técnica, haciendo énfasis en la seguridad y la escalabilidad:

1.  **Tipado Estricto (TypeScript):** Uso avanzado de **Interfaces, Tipos Genéricos** y **Uniones Discriminadas** para tipificar props, estados y _Custom Hooks_.
2.  **Arquitectura Modular:** Implementación de la **separación de responsabilidades** mediante _Custom Hooks_ para la lógica de negocio (por ejemplo, gestión de _Fetch_ o formularios).
3.  **Gestión de Estado Avanzada:** Aplicación de `useReducer` para manejar estados complejos y `useContext` para la inyección de dependencias.
4.  **Optimización:** Uso de `React.memo`, `useCallback` y `useMemo` para optimizar el rendimiento de los componentes.

---

## ⚙️ Instalación y Uso

Para ejecutar este proyecto localmente, sigue los siguientes pasos.

### Requisitos

Asegúrate de tener **Node.js** (versión LTS recomendada) y **npm** o **yarn** instalado en tu sistema.

### Pasos

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/santiagomp597/react-ts-essentials.git
    cd react-ts-essentials
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```

---

## 💻 Scripts Disponibles

El proyecto utiliza **Vite** como _bundler_. Los comandos se ejecutan desde el directorio raíz del proyecto:

| Comando           | Descripción                                                                                                                                                 |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo local de Vite en modo _hot reload_. Accede a `http://localhost:5173` (o el puerto que se indique) para ver la aplicación.  |
| `npm run build`   | Ejecuta la fase de **transpilación de TypeScript** (`tsc -b`) y luego genera la versión optimizada para producción (`vite build`) en el directorio `dist/`. |
| `npm run lint`    | Ejecuta el linter (`eslint`) para analizar el código en busca de errores y problemas de estilo en todo el proyecto.                                         |
| `npm run preview` | Sirve la compilación de producción generada en `dist/` para realizar pruebas locales finales antes del despliegue.                                          |

---

## 🤝 Contribución

Este repositorio es una demostración de código. Siéntete libre de inspeccionar el código, sugerir mejoras arquitectónicas o reportar problemas de tipado mediante la apertura de _issues_. El enfoque es el aprendizaje mutuo y la mejora continua de las buenas prácticas.
