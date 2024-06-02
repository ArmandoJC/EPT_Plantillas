# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Subir a Github Pages

1. Ir a Settings en el repositorio

2. Correr el siguiente comando para poder generar el build de producción:

```
npm run build
```

3. Con el comando anterior se debe haber generado la carpeta llamada dist. Ahora, se tiene que cambiar el nombre a docs

4. Se sube la carpeta al repositorio con los comandos:

```
git add .
git commit -m "Nombre que ustedes quieran aquí entre comillas del cambio"
git push
```

5. En github, ir a settings y al apartado de Pages en la izquierda.

6. Para esto, el repositorio debe ser público. Se debe seleccionar en Branch la rama main, luego, cambiar de root a docs y darle click en guardar

7. Se debe esperar hasta 15 min y actualizar la página para ver el link.

8. Entrar al link y ya se puede ver la página.
