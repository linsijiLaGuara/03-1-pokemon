<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```
5. reconstruis la base de datos de la semilla
```
http://localhost:3000/api/v2/seed
```

6. Clonar el archivo```.env.template ```y renombrar env 
 

 7.llenar las variables  de entornos definidas en ```env``` 


 8. ejecutar la aplicacion en dev
 ```
 yarn start:dev
 ```

 # Notas
 Heroku redeploy sin cambio
  ```
  git commit --allow-empty -m "Tigger heroko deploy"
  git push heroku <master|mian> 
 ```
## Stack usado
* MongoDB
* Nest