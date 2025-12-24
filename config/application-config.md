# Application Configuration

Este archivo define la fuente única de verdad para las variables de configuración del sistema.

## Base de datos

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root

## Tokens

TOKEN_EXPIRATION=3600
ISSUER_URI=http://localhost:8080

## Angular

ANGULAR_ENV=development

# Activar todos los endpoints necesarios

management.endpoints.web.exposure.include=health,info,metrics
