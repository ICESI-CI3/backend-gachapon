### Endpoints de la API

#### 1. Crear un personaje
- **Método:** `POST`
- **Ruta:** `/character`
- **Parámetros de entrada:** `createCharacterDto` (DTO para crear un personaje)
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Retorna el personaje creado.

#### 2. Obtener todos los personajes
- **Método:** `GET`
- **Ruta:** `/character`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y roles de `ADMIN` o `PLAYER`
- **Respuesta:** Retorna una lista de todos los personajes.

#### 3. Obtener un personaje por ID
- **Método:** `GET`
- **Ruta:** `/character/:id`
- **Parámetros de entrada:** `id` (ID del personaje)
- **Autorización:** Requiere autenticación y roles de `ADMIN` o `PLAYER`
- **Respuesta:** Retorna el personaje correspondiente al ID proporcionado.

#### 4. Actualizar un personaje
- **Método:** `PUT`
- **Ruta:** `/character/:id`
- **Parámetros de entrada:** `id` (ID del personaje), `updateCharacterDto` (DTO para actualizar un personaje)
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Retorna el personaje actualizado.

#### 5. Eliminar un personaje
- **Método:** `DELETE`
- **Ruta:** `/character/:id`
- **Parámetros de entrada:** `id` (ID del personaje a eliminar)
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Retorna un mensaje de éxito si se elimina correctamente.

### Endpoints de la API para Weapon

#### 1. Crear un arma
- **Método:** `POST`
- **Ruta:** `/weapon`
- **Parámetros de entrada:** `createWeaponDto` (DTO para crear un arma)
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Retorna el arma creado.

#### 2. Obtener todas las armas
- **Método:** `GET`
- **Ruta:** `/weapon`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y roles de `ADMIN` o `PLAYER`
- **Respuesta:** Retorna una lista de todas las armas.

#### 3. Obtener un arma por ID
- **Método:** `GET`
- **Ruta:** `/weapon/:id`
- **Parámetros de entrada:** `id` (ID del arma)
- **Autorización:** Requiere autenticación y roles de `ADMIN` o `PLAYER`
- **Respuesta:** Retorna el arma correspondiente al ID proporcionado.

#### 4. Actualizar un arma
- **Método:** `PUT`
- **Ruta:** `/weapon/:id`
- **Parámetros de entrada:** `id` (ID del arma), `updateWeaponDto` (DTO para actualizar un arma)
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Retorna el arma actualizado.

#### 5. Eliminar un arma
- **Método:** `DELETE`
- **Ruta:** `/weapon/:id`
- **Parámetros de entrada:** `id` (ID del arma a eliminar)
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Retorna un mensaje de éxito si se elimina correctamente.

### Endpoints de la API para Gacha

#### 1. Obtener un arma de la Gacha (1 vez)
- **Método:** `GET`
- **Ruta:** `/gacha/weapon1`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y rol de `PLAYER`
- **Respuesta:** Retorna un arma obtenida de la Gacha una vez.

#### 2. Obtener diez armas de la Gacha (10 veces)
- **Método:** `GET`
- **Ruta:** `/gacha/weapon10`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y rol de `PLAYER`
- **Respuesta:** Retorna una lista de diez armas obtenidas de la Gacha.

#### 3. Obtener un personaje de la Gacha (1 vez)
- **Método:** `GET`
- **Ruta:** `/gacha/character1`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y rol de `PLAYER`
- **Respuesta:** Retorna un personaje obtenido de la Gacha una vez.

#### 4. Obtener diez personajes de la Gacha (10 veces)
- **Método:** `GET`
- **Ruta:** `/gacha/character10`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y rol de `PLAYER`
- **Respuesta:** Retorna una lista de diez personajes obtenidos de la Gacha.

Voy a documentar las funcionalidades de cada endpoint, así como sus parámetros y respuestas, y explicaré cómo se implementaron las características de autenticación, autorización y persistencia en la base de datos.

### Endpoints de la API para Seed

#### 1. Sembrar personajes
- **Método:** `POST`
- **Ruta:** `/seed/character`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Sembrar los personajes en la base de datos.

#### 2. Sembrar armas
- **Método:** `POST`
- **Ruta:** `/seed/weapon`
- **Parámetros de entrada:** Ninguno
- **Autorización:** Requiere autenticación y un rol de administrador (`ADMIN`)
- **Respuesta:** Sembrar las armas en la base de datos.

### Características de Autenticación, Autorización y Persistencia

La aplicación implementa un sistema robusto de autenticación y autorización mediante el uso de guardias de autenticación y autorización proporcionados por NestJS.

- **Autenticación:** Se utiliza el guardia de autenticación JWT (`JwtAuthGuard`) para validar la autenticidad de las solicitudes entrantes mediante tokens JWT válidos. Esto asegura que solo los usuarios autenticados puedan acceder a los recursos protegidos de la API.
  
- **Autorización:** El guardia de autorización (`RolAuthGuard`) se encarga de verificar los roles de los usuarios y determinar si tienen permiso para acceder a recursos específicos. Esto se logra mediante el uso del decorador `@Roles` que especifica los roles permitidos para cada endpoint. De esta manera, se asegura que solo los usuarios con roles adecuados puedan acceder a ciertos recursos y realizar acciones específicas.

- **Persistencia en la Base de Datos:** La persistencia en la base de datos se gestiona a través de los servicios correspondientes de cada entidad (por ejemplo, `CharacterService`, `WeaponService`, `GachaService`, `SeedService`, etc.). Estos servicios interactúan con la capa de acceso a datos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos de mongoDB, asegurando la integridad y consistencia de los datos almacenados.