# ⚡ Simplicity Systems

> Suite modular de herramientas operativas y de gestión comercial desarrollada con **Astro 5**, **React 19**, **React-PDF** y **Google Sheets REST Webhooks**.

---

## 🌟 Descripción General

**Simplicity Systems** es un centro de utilidades y herramientas diseñado para negocios de hotelería, turismo y servicios. Permite desacoplar las operaciones internas de la web pública de los clientes, brindando una arquitectura liviana, de cero costo fijo de servidor y alta escalabilidad.

### Módulos Incluidos

1. **🎫 Generador Dinámico de Vouchers (`/vouchers`):**
   - Creación de vouchers de estadía con renderizado vectorial en tiempo real vía `@react-pdf/renderer`.
   - Soporte para desglose de servicios, anticipos en USD, fechas y datos del huésped.
   - Botón de **Carga Demo** para evaluación instantánea en portfolio.
   - Descarga directa en formato PDF A4 listo para imprimir o enviar por WhatsApp/Email.

2. **📅 Motor de Carga de Reservas (`/reservas`):**
   - Formulario de alta rápida de reservas con validaciones lógicas en tiempo real.
   - Doble modo operativo:
     - **Modo Demo (Portfolio):** Simula el flujo completo con feedback interactivo sin requerir configuración externa.
     - **Modo Google Sheet Live:** Conexión asíncrona en tiempo real con una planilla de Google Sheets a través de Google Apps Script.

---

## 🛠️ Stack Tecnológico

- **Framework Web:** [Astro 5](https://astro.build/) (Server-Side Rendering con Node adapter)
- **Componentes Reactivos:** [React 19](https://react.dev/)
- **Motor de PDF:** [@react-pdf/renderer](https://react-pdf.org/)
- **Backend Serverless:** Google Apps Script + Google Sheets API
- **Estilos & UI:** CSS3 moderno con variables dinámicas, tipografía *Plus Jakarta Sans* y layout responsive.

---

## 🚀 Instalación y Puesta en Marcha

### 1. Clonar o ingresar al directorio
```bash
cd simplicity_systems
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar en modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:4321`.

### 4. Compilar para producción
```bash
npm run build
```

---

## 📄 Conectar con tu propio Google Sheet

En la carpeta [`scripts/google-apps-script.js`](scripts/google-apps-script.js) encontrarás el código listo para copiar en el editor de Apps Script de cualquier planilla de Google Sheets.
