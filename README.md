## TCC_pololos
<span style="color:#ff8000">Usted me dijo que la caja tiene acceso por si hay errores, y eso de qué manera se hace?, una página web?</span>
----------
## DataBase (MySQL)
 
- **DATABASE pololos:** El nombre de la base de datos.
 
- **TABLE usuario:** Aquí se almacenarán los datos de Login, cómo el usuario y la contraneña
 
- **TABLE persona:** Contiene la informacion personal de cada entidad, cómo nombre, numero de cedula y si es requerido, la dirección y el telefono.
 
- **TABLE cliente:** Solo contiene un campo, y es para indicar si la persona registrada es de tipo cliente.
 
- **TABLE ingrediente:** Son la lista de ingredientes que se pueden adicionar, sólo contiene el *nombre* y el *precio*. 
 
- **TABLE categoria:** Para facilitar a los clientes al momento de elejir sus platos se ha creado la tabla categoria, pues estos pueden ser de tipo *Dulce*, *salado*, *picante* y otros.
 
- **TABLE comida:** Cada plato que el restaurante posea estará registrado aqui, con campos cómo el *valor, precio y categoria*.
 
- **TABLE proveedor:** Debido a que los ingredientes se pueden acabar se es necesario tener una tabla de proveedor, quien es el encargado de suministrar dicho ingrediente al establecimiento, aqui se encuentran los datos basicos de el.
 
- **TABLE ingrediente_x_comida:**  Se asignan los posibles ingredientes que ya posee la comida y además los ingredientes que se pueden adicionar.
 
- **TABLE marca:** Marca de los productos
 
- **TABLE producto:** Nombres de los productos
 
- **TABLE marca_x_producto:** Relacion entre productos, por marca y tipo
 
- **TABLE proveedor_x_producto:** Relacion que conecta los proveedores con los productos que puede suministrar
 
- **TABLE factura_compra:** Relaciona un pedido con una factura
 
- **TABLE compra:** <span style="color:#ff8000">Es la compra de los proveedores?</span>. Si, esta tabla hace referencia a las compras que hace el restaurante a los diferentes proveedores
 
- **TABLE area_empleado:** <span style="color:#ff8000">?</span>. Esta tabla se refiere al area donde se trabaja cada empleado, es decir, cocina, limpieza o mesenero
 
- **TABLE empleado:** Crea un empleado, con una llave foranea en persona, tambien con su sueldo y ´prestaciones.
 
- **TABLE factura_venta:** Relaciona una factura con la venta de los empleados
 
- **TABLE metodo_pago:** Crea los metodos de pago posibles
 
- **TABLE venta:** <span style="color:#ff8000">Sólo se puede vender un plato?</span>.  
 
- **TABLE mesa:** Establece las caracteristicas de cada mesa, como numero de usuarios y su identidicador, <span style="color:#ff8000">Sería mejor ponerlo tipo **varchar**</span>
 
- **TABLE empleado_x_mesa:** establece quien es el empleado que atenderá cada mesa.
  
- **Notas DB**
  - Añadir relacionar la venta con un empleado

  - Añadir los recursos como direcciones a imagenes u objetos 3d
  
  - Añadir el campo API_KEY en los usuarios sin registro

  - Ya añadi el campo foto en las tablas ingredientes y comida para poder almacenar 
  - RESPUESTA A LAS FUNCIONES DE LA CAJA: Cuando le dije eso de que por si hay algun error la caja tuviera acceso, quise decir, que por ejemplo no se proceso un pago o se duplico una orden. En caja ingresando su id de empleado podria manipular esos problemas. Bien sea eliminando lo que se duplico o viendo si no se proceso algun pago
----------


## How use API *POST request*

- **Usuarios sin registro:** Para los usuarios que deseen usar el servicio sin registrarse accederán de la siguiente manera, donde **Table** se refiera al numero o nombre de mesa y **Position** es el numero de silla donde se encuentra, esos datos son automatiocos y preconfigurados en cada mesa. **usuario_sin_registro**
  
  ```JavaScript 
    {
        "Name"  : ... ,
        "Table" : ... ,
        "Position" : ... 
    }
  ```

- **Registrar usuario:** Los usuarios que desen tener acceso a delivery, promociones y otros beneficios y se dessen registrar. **registrar_usuario**
    
    ```JavaScript 
    {        
        "nombre"    : ... ,
        "cedula"    : ... ,
        "telefono"  : ... ,
        "direccion" : ... ,
        "usuario"   : ... ,
        "contrasenia" : ...,
        "API_KEY": ......
    }
  ```
- **Login:** Si el usuario se encuentra registrado la respuesta será el frame *API_KEY*, de otra manera la respuesta será **LOG**. **login**
    ```JavaScript 
    {
        "usuario" : ...
        "contrasenia" : ...
    }
  ```

## How use API *POST response*

- **API_KEY:** Es la llave que usará el servidor para validar un usuario activo dentro del sistema, y su ubicacion en las mesas.
    ```JavaScript
    {"API_KEY" : "........................."}
    ```
- **LOG:** De proposito general, cómo mensajes directos del servidor, usuario no entontrado, o usuario registrado, con contrasenha incorrecta y demás mensajes
    ```JavaScript
    {"LOG" : "........................."}
    ```

