# 🎟️ TicketApp — Sistema de Gestión de Tickets con React + Vite

TicketApp es una aplicación web desarrollada con **React**, **Vite** y **Firebase**, diseñada para la generación, gestión y control de tickets en tiempo real. Ideal para entornos donde se requiere crear tickets personalizados, generar reportes PDF al instante y exportar configuraciones listas para ser utilizadas en herramientas como **Winbox** (MikroTik).

## 🚀 Tecnologías utilizadas

- **[React](https://reactjs.org/)** — UI declarativa y basada en componentes.
- **[Vite](https://vitejs.dev/)** — Bundler ultrarrápido con soporte HMR.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipado estático para mayor robustez.
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilizado rápido y moderno.
- **[Firebase](https://firebase.google.com/)** — Autenticación y persistencia.
- **[jsPDF](https://github.com/parallax/jsPDF)** — Generación de documentos PDF en tiempo real.

## 📦 Instalación

```bash
git clone https://github.com/tuusuario/ticket-app.git
cd ticket-app
npm install
npm run dev

📁 Estructura de carpetas
bash
Copiar
Editar
src/
├── components/       # Componentes reutilizables
├── context/          # Contextos globales (AuthContext)
├── pages/            # Vistas principales (Login, Dashboard, etc.)
├── services/         # Configuraciones como Firebase
├── utils/            # Funciones utilitarias (PDF, exportación CMD)
├── App.tsx           # Rutas y estructura principal
└── main.tsx          # Punto de entrada

🔐 Funcionalidades principales
✅ Registro y Login con Firebase Authentication

✅ Protección de rutas mediante contexto de usuario

✅ Generación de tickets en PDF usando jsPDF

✅ Exportación de scripts CMD para configuración vía Winbox

✅ Interfaz adaptable y moderna con TailwindCSS

🔧 Scripts disponibles
npm run dev — Ejecuta la app en modo desarrollo.

npm run build — Compila la app para producción.

npm run preview — Previsualiza la versión de producción localmente.

npm run lint — Ejecuta ESLint sobre el código.

🧱 Estado del proyecto
Este proyecto está dividido por fases de desarrollo. Las funcionalidades se agregan de forma incremental.

 Configuración inicial de Vite + React + Tailwind

 Firebase (auth + configuración)

 Contexto de autenticación global

 Rutas protegidas

 CRUD de tickets

 Generador de PDF personalizado

 Exportador de comandos para consola Winbox

🤝 Contribuciones
¿Tienes ideas o mejoras? ¡No dudes en abrir un issue o enviar un pull request!

👤 Autor
Desarrollado por Adrianfer Jose Martinez Miranda
Técnico Superior en Informática | Fundador de AR Sistem