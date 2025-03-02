# Módulo 3 | JavaScript desde cero

En este repositorio se estarán subiendo las actividades que se realizarán a lo largo del Módulo 3 del Master de Frontend impartido por DEV.F.



## Contenido del Módulo

☑ Clase 1: Introducción a JavaScript

☑ Clase 2: Comparaciones y decisiones en JavaScript

☑ Clase 3: Arreglos y ciclos en JavaScript

☑ Clase 4: Funciones en JavaScript

☑ Clase 5: Intro a Objects en JavaScript

☑ Clase 6: Intro al DOM en JavaScript

☑ Clase 7: Dominando el DOM en JavaScript

Clase 8: Proyecto Final (dom)


## CLASE 1 - INTRODUCCIÓN A JAVASCRIPT

En esta clase estuvimos practicando los conceptos teóricos que se trataron en la sesión de zoom. Se nos explicaron los conceptos de Lenguaje de Programación, JavaScript y los datos que se utilizan dentro de JavaScript.

Como actividad entregable en el campus, se creó un archivo .js en el que se interactuó con diferentes tipos de datos con el fin de identificar cada tipo de datos que existen dentro del Js. Se declararon como variables y también se identificaron sin ser declaradas como variables.

Adicionalmente, se usó como referencia el sitio: https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures para conocer qué otros de datos se pueden encontrar en Js y con ayuda de ChatGPT se creó un código para implementar estos datos y comprender su estructura al escribirla en el código.


## CLASE 2 - COMPARACIONES Y DECISIONES EN JAVASCRIPT

En esta clase exploramos los operadores de comparación y lógicos a profundidad de manera práctica en clase, que complementan la teoría revisada en las lecturas de campus. El sensei nos mostró algunas maneras alternativas de escribir una comparación de varias maneras y nos indicó en qué casos se pueden optar por estas alternativas. También nos sugirió crear diagramas de flujo antes de realizar el código en cuestión para identificar mejor los caminos que se deben tomar al crear las condicionales, lo cual utilicé para la realización de los ejercicios.

Para el entregable de campus se realizó un ejercicio para determinar si la calificación de un estudiante es aprobatoria o no, además de indicar un comentario extra dependiendo de la calificación obtenida. Se optó por generar un número aleatorio entre 0 y 100 en este ejercicio para simular el ingreso de la calificación al sistema y para determinar tanto si la calificación es aprobatoria o no, como el comentario extra se utilizó una condicional if-else. De esta manera, se tiene un código limpio y eficiente que nos permite llegar a la solución del problema planteado.

Para el ejercicio 1 extra, se optó por utilizar un switch case para llegar a la solución. Como se busca saber si el número ingresado es un número par o no, se utilizó como condicional el módulo del número ingresado, debido a que si el residuo de un número dividido entre 2 nos da como resultado cero entonces se trata de un número par. Tal como en el ejercicio anterior, se utilizó un número aleatorio entre 0 y 100 para que evalúe si el número es par o impar.

Para el ejercicio 2 extra, como se pidió evaluar si un número ingresado es primo o no se utilizó un operador for que complementa al condicional if-else para determinar si el número generado es tiene más divisores que él mismo y el número 1 (recordando la propiedad de un número primo que dicta que un número es primo solo si es divisible únicamente entre el número 1 y entre sí mismo). Antes de generar esta evaluación, se añadió un condicional que excluya al 1 y al 0 del operador for, debido a que estos 2 números se excluyen de la definición de ser primos.

Para el ejercicio 3 extra, se decidió utilizar dos sistemas switch para determinar en qué estación nos encontramos dependiendo el mes que se ingrese al programa. En este caso, se decidió asociar un número del 1 al 12 a cada mes del año y se contempló que una estación del año abarca hasta 3 meses. Una vez declarado esto, se decidió optar por generar un número aleatorio del 1 al 13, con el fin de simular todos los meses ingresados y también cuando se ingrese un valor que no sea un mes del año.


## CLASE 3: ARREGLOS Y CICLOS EN JAVASCRIPT

En esta clase entendimos lo que son los ciclos y arreglos en JavaScript. Vimos las sintaxis que se utilizan en cada caso, así como sus características generales de cada caso. Junto al sensei hicimos varios ejemplos en la clase virtual y nos dio elementos suficientes para poder resolver el ejercicio que se nos pide resolver en la plataforma de campus.

Para esta ocasión, se ocupaba clasificar el tipo de frutas que se ingresaba en un tipo de array y se necesitaba imprimir en la consola la cantidad de cada fruta descrita. Esto se logró resolver a través de un ciclo for, ya que de antemano sabíamos qué tanto se necesitaba iterar para poder clasificar las frutas ingresadas, porque en este caso nosotros declaramos el array que contenía las frutas a declarar.

El sensei nos propuso un grado más de dificultad al tener que hacer una clasificación de frutas a partir de una imagen que nos compartió en la cual se clasificaban las frutas como ácidas, semiácidas, neutras y dulces. Con esta nueva instrucción, se resolvió el problema utilizando de nueva cuenta un ciclo for, que recorriera cada uno de los índices del array que contenía las frutas (canastaDeFrutas) y la evaluaba con los arrays de las clases de frutas para poder clasificarla y de esta manera imprimiera la cantidad de cada clase de fruta.


## CLASE 4: FUNCIONES EN JAVASCRIPT

En esta clase se entendieron las bases de funciones en JavaScript, la manera de declararlas así como los distintos tipos de funciones que existen para resolver problemas dentro de la programación.

Para el entregable se nos pidió hacer un sistema sencillo de almacenamiento de libros que hayamos leído. Para resolver el problema, se utilizó la recomendación que indicaba la plataforma de campus y se crearon 2 funciones: una que se encargaba de almacenar los libros ingresados al sistema y otra que se encargara de imprimir los libros que estaban registrados en el sistema. 

En la función que se encargaba de almacenar los libros se utilizó un array y se definió una variable "libro" que funcionara como objeto, ya que de esta manera se garantizaba que se registraran el título del libro y del autor.


## CLASE 5: INTRO A OBJECTS EN JAVASCRIPT

Para esta clase se nos pidió que practicáramos con el concepto de Objetos mediante la creación de objetos que almacenaran información de libros. Para esta ocasión utilicé algunos de los libros que tuve la oportunidad de leer y aún conservo para la creación del programa.

Utilizando el ejemplo visto en clase con el sensei, se utilizó un "molde" para crear objetos a partir de una clase y que nos permite solucionar el problema planteado al inicio.  La clase sigue el paradigma de programación orientada a objetos (POO), utilizando un constructor para inicializar las propiedades del libro y métodos para interactuar con él. Además, se han agregado iconos en los console.log para mejorar la legibilidad de los mensajes de salida.

Se incluyen métodos para describir el libro, agregar y eliminar capítulos, y mostrar la lista de capítulos. Para efectos de la presentación del código, se invocan console.log() con el fin de corroborar que el código es funcional y cumple con los requerimientos del problema planteado.


## CLASE 6: INTRO AL DOM EN JAVASCRIPT

Para este entregable se nos pidió que crearamos una caja de comentarios en la que diferentes usuarios puedan agregar y compartir lo que piensen acerca de lo que se comparta en una página web, por lo que decidí simular un post de Instagram.

Primeramente cree un HTML y una hoja de estilos sencilla que sirviera como molde de esta simulación de post de Instagram. Para el archivo JavaScript cree unos avatares que se generan aleatoriamente simulando perfiles de personas que comentan en el post. Se utilizó un localStorage para almacenar los comentarios, de modo que persistan aunque la página se recargue. 

El usuario puede comentar en la página ya sea por medio de hacer click en el botón correspondiente a publicar el comentario o bien haciendo click en la tecla Enter de su teclado. También puede eliminar su comentario si así lo desea al hacer click en un botón rojo que se encuentra a un costado del comentario publicado si el usuario así lo desea.

Por último, la función loadComments() recupera y muestra los comentarios almacenados que se hayan generado en el sitio web en cuestión.


## CLASE 7: DOMINANDO EL DOM EN JAVASCRIPT

En esta ocasión se ha pedido crear un generador de contraseñas, por lo que se han utilizado 3 archivos, uno HTML para darle estructura, uno CSS para definir el estilo y por último un JS para darle funcionalidad.

En cuanto a la estructura se ha generado un contenedor principal que se encarga de contener al generador en sí. Dentro del contenedor se ha generado un campo donde muestra la contraseña generada y un botón de copiar. Después encontramos los controles de personalización que permiten al usuario la longitud de la contraseña y seleccionar los tipos de caracteres que el usuario necesite para su contraseña. Por último tenemos un medidor de fortaleza, el cual muestra visualmente la fortaleza de la contraseña generada.

La hoja de estilos nos permite tener un diseño coherente visualmente y fácil de modificar si se necesita. Este diseño es responsivo y puede adaptarse a diferentes tamaños de pantalla.

Para el archivo js se crea una función que nos permite crear una cadena de caracteres basada en las preferencias del usuario y genera una contraseña aleatoria utilizando un bucle for. La contraseña que se genera se muestra en el campo de texto y se procede a evaluar la fortaleza de ésta.

Para la evaluación de la contraseña se calcula la fortaleza con su longitud y su complejidad. Una vez calculada la complejidad se procede a actualizar la barra que permite al usuario visualizar mejor el nivel de fortaleza que tiene su contraseña generada.

Se implementó un historial de las contraseñas generadas por el usuario, limitado a 5 contraseñas. Esta lista se actualiza dinámicamente en el sitio y el usuario puede descargar esta lista que se ha generado en un archivo de texto (.txt).


## Autor

- [@AlexRM-27](https://www.github.com/AlexRM-27)

