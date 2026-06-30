# Angular CI/CD Pipeline & Code Quality

## 📌 Objetivo del Proyecto
Este repositorio sirve como demostración de la configuración de un entorno de desarrollo profesional para una aplicación frontend. El objetivo principal es mostrar la automatización de la calidad del código, la integración continua y la seguridad del proyecto utilizando flujos de trabajo (workflows) avanzados de GitHub Actions.

## 🏗️ Estructura del Proyecto
El proyecto está dividido en los siguientes módulos principales:

* **`/ag-prueba-front`:** Código fuente de la aplicación cliente (Frontend). Contiene la configuración de dependencias, scripts de cliente y las reglas estrictas de validación de código mediante ESLint.
* **`/.github/workflows`:** Pipelines de automatización configurados mediante GitHub Actions. Incluye:
  * `ci.yml`: Integración Continua (validación de código y pruebas).
  * `deploy.yml`: Flujo de despliegue automatizado.
  * `post-deploy-scan.yml`: Escaneo de vulnerabilidades y seguridad tras el despliegue.
  * `sbom.yml`: Generación del *Software Bill of Materials* (inventario de componentes de software para control de seguridad).

## 🚀 Tecnologías Utilizadas
* **Frontend:** Angular, TypeScript
* **Calidad de Código:** ESLint, TypeScript-ESLint
* **CI/CD & DevOps:** GitHub Actions

## ⚙️ Cómo ejecutar el proyecto (Local)

Para levantar la aplicación frontend en tu entorno local, sigue estos pasos:

1. Accede al directorio principal del frontend:
   ```bash
   cd ag-prueba-front
2. Instala las dependencias necesarias:
    ```bash
    npm install
3. Levanta el servidor de desarrollo:
    ```bash
    npm start
