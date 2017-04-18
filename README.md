 PandaPanda
 -----------
 Documentación del ejercicio evaluado de la lección 22, acerca del uso de la propiedad display y sus tipos.
 
 HTML
 ------------
 Agregue la etiqueta **link, dentro del **head** para enlazar el archivo **CSS**.
 
 Primero cree el **header** donde estará contenido el menú,para eso dentro del **body** se agrega la etiqueta **header**, luego dentro inserté la etiqueta **nav**,donde coloqué la lista no ordenada y dentro de cada **li** agregué un elemento **a** donde van los nombres: "Inicio", "Pandas","Historia" y "Extinción",para los enlaces.
 
 Luego cree una sección para las imagénes con la etiqueta **section**, para cada imagen cree un **div** con la clase "imagenes", dentro del **div** van las etiquetas **img** y **span** que contendrán las imágenes y la "x" respectivamente.
 
 Después cree otra sección para los botones y las dos columnas de párrafos, a esta etiqueta **section** le di la clase "contenido" para modificarla luego en **CSS**. Dentro de esta sección cree un **div** para los botones, con la clase "botones", cree los tres botones con la etiqueta **input**, cada input de tipo:"submit" ,con los **value**:"Origen","Historia" y "Restaurar fotos",cada input con un **id** diferente.
 
 Cree otro **div** de clase:"parrafos", para las columnas de párrafos, dentro de este **div** cree dos etiquetas **div**, y en cada una agregué una  etiqueta **p** que contiene dos párrafos cada uno. El primer **div** tiene el **id** "colummna1" y el segundo "columna2".
 
 Al final agrego la etiqueta **script** para enlazar el archivo **javascript**.
 
 CSS
 ----
 
 Con el selector * a todos los elementos le doy **margin:0** y **padding:0** quitando los valores del navegador por defecto.
 
 Uso el selector **body** para darle un color de fondo negro (background) y tipo de fuente **sans-serif**.
 
 A los selectores **header**,**section**,**.contenidos** y **.parrafos** le di un **width** de 90%, un margen de **80px auto** ( para centrar el contenido), y un máximo de ancho de 1000px.
 
 Al selector **nav** que esta en el **header** le di un color de fondo y un **overFlow:hidden"(elimina el contenido restante y limpia el float).
 
 A las listas le quité el estilo con **list-style:none**.
 
 A los selectoress **li** les puse un **float:left** para que floten a la izquierda.
 
 A todos los selectores **a** el puse un padding de **20px** arriba y abajo y de **30px** a los costados, **display:block**,un color de letra blanco y le quite la decoración con **text-decoration:none**.
 
 Cuando al enlace se le haga un **hover** cambiará de color.
 
 A los divs con la clase imagenes les puse un display **inline-block** y **position:relative**,para que este´n uno al lado de otro y para que el **se posicione con relación al div que lo contiene.
 
 A los inputs le puse display inline-block, un ancho y un relleno. Un color de fondo y color de letra de acuerdo al ejemplo, y sin bordes para crear el efecto de botón, también al hacer hover cambia de color de fondo y el cursor es **pointer**.
 
 A los divs con clase .parrafos les doy un ancho de 100% y un color de letra blanca.
 
 A los divs dentro de los de clase parrafo les doy **display:inline-block** y un ancho de 40% pa ra dar el efecto de dos colummnas.
 
 Al **span** donde irán las **x** les puse **position:absolute** para que se posiciones del div que lo contiene y lo ubico en la esquina superior izquierda.
 
 A los divs que tienen la clase .close les puse **display:none** para que no cree la caja.
 
 y la clase **.ocultar** oculta la caja mas pero sigue ocupando su espacio, esto con **visibility:hidden**.
 
 JAVASCRIPT
 ----------
 
 Llamo a todos los elementos span y los guardo en la variable **span**
 
 Luego dentro de un **for** a los elementos de la lista que contiene la variable span, le aplico el metodo **addEventListener** cuando se le haga click, para que cuando esto suceda guarde al padre del span al que se le hizo click y a este se le agregue le clase **.close**, que quita la caja.
 
 Luego cuando le haga click al botón restaurar, al cual lo llamo por su **id**, guardo todos los elementos con la clase **.imagenes** en la variable **mostrar**, y con un for y un if se comprueba si contiene la clase **.close**(classList.contains("close")), se le remueve(classList.remove("close").
 
 Cuando se le hace click a cualquiera de los botones de le agrega y oculta la clase **ocultar**(classList.toggle("ocultar")).
 
 
 
 
 
 
 
 

