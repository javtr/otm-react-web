//imagenes: miniatura: 765x400, grande: 1240x470

//---- etiquetas--------:
//url: "string-url"

//---- previo y miniaturas -----
//imgp,miniatura: "./"
//titp, titulo miniaturas: "string"
//txtp, parrafo del previo: "string"

//---- articulo ----------
//imgb,grande: "./"
//titb_1, titulos internos: "string"
//subb_1, subtitulo: "string"
//txtb_1, parrafos: "string"
//txlb_1, texto con link: ["texto","link"]
//dotb_2, texto con dot: "string"
//dtlb_1, texto con dot y link: ["texto","link"]

//bytb, autor: "string"
//date, fecha: "string"

//iinb_1, imagenes internas: "./"
//vidb,ID video youtube: "6BAv9sIQ6BU"

//lnkb: boton: ["link","nombre boton"]

//key_: etiquetas




export const BlogDataEs = [
  {
    imgp: "./blog/art2_min.png",
    titp: "Operar en el mercado de futuros: Una visión general y consejos prácticos",
    url: "operar-en-el-mercado-de-futuros-una-visión-general-y-consejos-prácticos",
    txtp: "El trading de futuros presenta numerosas ventajas, abarcando desde la especulación hasta la gestión de riesgos. Una de las cosas que me apasiona de este mercado es su naturaleza desafiante. No me refiero a que sea casi imposible aprender a operar futuros, sino a que su particularidad permite involucrarse en una amplia gama de mercados, como acciones o commodities, lo cual resulta sumamente interesante. Además, gracias al apalancamiento, es posible iniciarse con pequeñas cantidades de dinero. Mi objetivo es transmitirte esta pasión y, a su vez, brindarte una explicación detallada sobre los futuros y cómo dar tus primeros pasos en el trading.",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",
    date: "18/06/2023",


    titb_1: "¿Qué son los futuros?",

    txtb_1:
      "Comencemos desde lo más elemental. Un futuro es un instrumento financiero que forma parte del fascinante mundo de los derivados. En esencia, se trata de contratos que vinculan a las partes involucradas para acordar la transacción de un activo subyacente en una fecha y a un precio predeterminados en el futuro. En otras palabras, este contrato adquiere su valor de otro activo, ya sea acciones, materias primas, índices o incluso criptomonedas, y a través de la especulación se establece un precio que se espera tenga en el futuro. Sin importar cómo fluctúe el valor de mercado, tanto el comprador como el vendedor están comprometidos a llevar a cabo la transacción al precio acordado.",


    titb_2: "¿Qué es trading de futuros?",

    txtb_2:
      "Los futuros son contratos financieros derivados que permiten a los traders obtener ganancias a través de cambios en el precio de un activo subyacente a lo largo del tiempo, asumiendo o compensando el riesgo involucrado. En el trading de futuros, se comercian estos contratos en relación al activo con el que se está operando. El comprador del contrato tiene la obligación de adquirir el subyacente una vez que el contrato llega a su fecha de vencimiento, pero durante la vigencia del contrato, el comprador puede vender su posición y liberarse de dicha obligación.",

    vidb:"6BAv9sIQ6BU",

    txtb_3:
      "Los futuros son contratos financieros derivados que permiten a los traders obtener ganancias a través de cambios en el precio de un activo subyacente a lo largo del tiempo, asumiendo o compensando el riesgo involucrado. En el trading de futuros, se comercian estos contratos en relación al activo con el que se está operando. El comprador del contrato tiene la obligación de adquirir el subyacente una vez que el contrato llega a su fecha de vencimiento, pero durante la vigencia del contrato, el comprador puede vender su posición y liberarse de dicha obligación.",


    lnkb:["https://www.youtube.com/watch?v=kxZOLGucXqA","Masterclass uso de OTM"]

    // txtb_3:
    //   "Aunque los futuros tuvieron su origen en el mercado de commodities (materias primas), en la actualidad se pueden operar en diversos activos y mercados. Existen diferentes tipos de futuros según su tamaño, incluyendo los futuros estándar, e-mini y micro e-mini. Los futuros mini y micro permiten a los traders operar en el mercado con una fracción del capital requerido en comparación con los contratos estándar.",

    // txtb_4:
    //   "Dentro del mercado de futuros mini y micro, se encuentran los futuros que siguen el rendimiento de índices bursátiles clave, como el E-mini S&P 500, el E-mini Nasdaq 100, el E-mini Russell 2000 y el E-mini Dow Jones Industrial Average. Los micro futuros, debido a su volatilidad, son una opción atractiva para considerar al operar. Te invito a ver un video que he preparado donde explico más sobre estos contratos en términos de volumen.",






  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-1",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit2",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-2",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit3",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-3",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit4",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-4",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit5",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-5",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit6",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-6",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit7",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update-7",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit8",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Tit 9",
    url: "local-sltp-orders-plus-major-dom-surface-update-8",
    txtp: "Parrafo del previo",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit9",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Blog con Gaby",
    url: "blog-test-1",
    txtp: "texto",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "tit9",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },



];

export const BlogDataEn = [
  {
    imgp: "./blog/art2_min.png",
    titp: "Title 1",
    url: "ingles-update-1",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Title 1",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Title 2",
    url: "local-sltp-orders-plus-major-dom-surface-update-2",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",
    date: "04/11/22",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Title 2 edited",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Local SL/TP orders",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Local SL/TP orders",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Local SL/TP orders",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Local SL/TP orders",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Local SL/TP orders",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",

    imgb: "./blog/art2_big.png",
    bytb: "OTM Team",

    subb_1:
      "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",

    titb_1: "Local SL/TP orders",

    txtb_1:
      "The main feature of this release is Local stop loss & take profit orders functionality, allowing to set these types of orders for all connections that don't natively support them. Worth mentioning that You can place local SL/TP orders for any available integration of Quantower, thus being beneficial for those traders who wish to use advanced placement settings.",

    iinb_1: "./blog/art2_int.png",

    txtb_2:
      "Quantower provides this functionality using the Orders placing strategy feature, meaning that all of the Local orders are solely handled on the platform side (literally 'on your machine'). Such behavior leads to some important notices and limitations that users should understand before use of Local closing orders:",

    dtlb_1: [
      "We insist that you read, practice, <link>and understand how the Local</link> closing orders work before using them for live trading. <link>You can also</link> watch this brief video manual",
      "https://youtube.com",
      "https://link.co",
    ],

    dotb_2: "Local orders exist and are managed on the platform side only.",

    txtb_3:
      "Compared to the native realization of SL/TP orders, the Local ones have more placement parameters, allowing you to operate more quickly and accurately. For example, you can easily set up Local brackets orders for closing your position in multiple tiers. The list of advanced settings contains:",

    iinb_2: "./blog/art2_int.png",

    txlb_1: [
      "One of the requests from our <link>trading community </link>was to show the trades volumes on a separate scale. Now you can enable volume display from the context menu as well as select one of the four types of view: Combined, Overlay, Mirror, & Delta. More about these types read in our documentation.",
      "https://link.co/es-us",
    ],

    key_: {
      integracion: "/",
      kucoin: "/",
    },
  },
];
