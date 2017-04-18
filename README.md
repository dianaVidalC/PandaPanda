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
 
 A los inputs le puse display inline-block, un ancho y un relleno.
 
 
 

