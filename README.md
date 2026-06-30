# POC: Arquitectura de Autorización y Recursos (Frontend + Backend)

## 📌 Objetivo de la Prueba de Concepto
Esta Prueba de Concepto (POC) tiene como objetivo demostrar la implementación y viabilidad de una arquitectura desacoplada utilizando un sistema de autenticación centralizado. El proyecto divide las responsabilidades entre un cliente frontend, un servidor de recursos protegido y un servidor de autorización independiente.

## 🏗️ Estructura del Proyecto
El repositorio está dividido en los siguientes módulos principales:

* **`/ag-prueba-front`:** Aplicación cliente (Frontend) desarrollada en [Añadir Framework, ej: React / Angular]. Actúa como el cliente que solicita acceso a los recursos protegidos.
* **`/authorization-server`:** Servidor de autorización en [Añadir tecnología, ej: Spring Boot / Node.js]. Encargado de gestionar las identidades, autenticar usuarios y emitir los tokens de acceso.
* **`/resource-server`:** Servidor de recursos (Backend API) en [Añadir tecnología]. Contiene la lógica de negocio y expone endpoints protegidos que requieren un token válido para ser consumidos.
* **`/config`:** Archivos de configuración centralizados.
* **`/.github/workflows`:** Pipelines de integración continua (CI) configurados mediante GitHub Actions.

## 🚀 Tecnologías Utilizadas
* **Frontend:** [Framework Frontend, ej: React, Vite, Node.js]
* **Backend:** [Framework Backend, ej: Java 17, Spring Boot, Spring Security]
* **Seguridad:** [Estándar usado, ej: OAuth2, JWT]
* **Infraestructura:** Docker & Docker Compose
* **CI/CD:** GitHub Actions

## ⚙️ Cómo ejecutar el proyecto (Local)

El proyecto está dividido en dos partes para su ejecución: el entorno backend (orquestado con Docker) y el cliente frontend.

### 1. Levantar los servidores Backend (Docker)
Asegúrate de tener [Docker](https://www.docker.com/) instalado. En la raíz del proyecto, ejecuta:

```bash
docker-compose up -d --build
