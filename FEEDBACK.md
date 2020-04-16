
# Revisión de Proyecto 

Antes que nada, quiero felicitarte por el compromiso que has tenido con el Learning path

> Es más facil escribir código que leerlo.
> -Joel Spolsky (Fundador de Stack Overflow)

Los puntos que voy a tocar aquí son sobre todo para mejorar y reforzar huecos que tenemos en algunas areas.

# HTML

Para la parte de HTML los puntos que hay que recalcar son sobre todo la consistencia.

###  Bueno

- Se tiene una muy buena semantica, es entendible
- Se hizo de una manera muy reducida 
- Se tiene buena identación
- Se hizo un buen uso de las propiedades nativas

### Malo

- Hay partes que tienen texto embebido y otras que no, no hay consistencia en eso
- Hay que pensar los webcomponents como componentes separados del HTML original, por lo cual requieren su propia sintaxis semantica
- En los componentes sobre todo, hay que agregar algún indicio en el HTML sobre lo que hace (comentarios)
- Cuando se trabaje con caracteres especiales en HTML, se deben de escapar con referencias de caracteres e.g. Para mostrar "í" usa `&#237;` o `&iacute;` dependiendo de tu código de codificación.

Tenemos unas muy buenas bases pero siempre podemos mejorar.
Te recomiendo checar este repo:
[https://github.com/hail2u/html-best-practices#escape-----and--with-named-character-references](https://github.com/hail2u/html-best-practices#escape-----and--with-named-character-references)

# CSS

Para esta parte lo que hay que tener en cuenta es el escalamiento de un proyecto, la redacción y el uso de las propiedades correctas

### Bueno

- Separamos los archivos de estilos de una manera optima para nuestro sistema de diseño
- Hicimos buen uso de las variables
- Conocemos la forma de estructuración de clases
- Se mantuvo una buena especificidad

### Malo

- Por estándar los numero hexadecimales deben ir en minúscula
- Hay una separación de archivos que se pudo omitir
- Hay un archivo que tiene el style dentro del componente y todos los demás no

Una de las razones de hacer webcomponents es que los estilos que apliques al documento o light DOM no les aplica a ellos, **tienen su propia abstracción de estilos**, debes de verlos como otro documento HTML

# JS

### Bueno

- Usamos webcomponents nativos
- Tenemos una implementación para que se genere de manera dínamica
- Hacemos buen uso de los tipos de variables
- Hacemos buen uso del spread operator
- Buen uso de set
- Buen acomodo de archivos	
- Buen uso de Nomencaltura para webcomponents

### Malo

- **No documentamos nada**
- No esta claro el criterio que se uso para poner shadowRoot o no
- Gracias al hoisting se pueden utilizar unas funciones que tienes, pero lo correcto es que primero declaremos la función antes de usarla
- Hay buen uso de nombres de variables, pero no el suficiente. O escogo un buen nombre para mi función que la explique o le pongo comentarios, aparte de la documentación


Para la parte de documentación revisa este sitio:
[https://documentjs.com/docs/documentjs.tags.param.html](https://documentjs.com/docs/documentjs.tags.param.html)

# CONCLUSIÓN

En general es una my buena propuesta, pero si no le dedicas el tiempo a revisarla es difícil de entender a simple vista, debemos poder hacerlo lo más sencillo posible con lo básico. Es una solución demasiado complicada para algo sencillo. Hay que mostrar con lo fundamental que podemos hacer esto, yo lo hubiera dejado hasta la parte de webcomponents, pero de nuevo, no esta mal, solo estamos matando una hormiga con un martillo.
