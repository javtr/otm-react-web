//imagenes: miniatura: 765x400, grande: 1240x470

//etiquetas:
//url(ruta del blog)
//img(imagen),iin(imagen interna)
//tit(titulo),sub(texto de subtitulo),txt(parrafo),txl(parrafo con link)
//dat(fecha),byt(by otm team),key_(keyword),lnk(ancla)
//dot(texto con punto),dtl(texto con punto y link)

export const BlogDataEs = [
  {
    imgp: "./blog/art1_min.png",
    titp: "Quantower connects with the KuCoin crypto exchange",
    url: "quantower-connects-with-the-kucoin-crypto-exchange",
    txtp: "After a bit of rest during the New Year holidays, our team began to develop functions for you actively. As a result, we've prepared new Local closing orders, updated the DOM Surface panel, and some more cool features. Let's dive inside this new version release.",
    datp: "07/02/2022",
    
    key_: {
      integracion: "/",
      kucoin: "/",
    },



    imgb: "./blog/art1_big.png",
    bytb: "OTM Team",
    subb1:
      "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration.",
    txtb1:
      "KuCoin is a global cryptocurrency exchange for numerous digital assets and cryptocurrencies. Launched in September 2017, KuCoin has grown to become one of the most popular crypto exchanges and already has over 10 million registered users across 200+ countries and regions worldwide.",
    txtb2:
      "As stated by KuCoin, they provide spot, futures, and margin trading (up to 10x leverage) based on the efficient Matching Engine that supports up to 1 million transactions per second without any overload. KuCoin is a high-liquidity exchange with the highest daily volume of nearly $500 million (USD) and the smallest bid-ask spread in the industry.",
    txtb3:
      "Thanks to the KuCoin advanced API, we created and deployed an integration with Quantower in a short time and are now ready to provide an advanced charting, DOM trader, DOM Surface, and other professional crypto-trading functionalities to all KuCoin clients. Any trader can start using Quantower for free in a Basic version or buy some advanced features in the future if necessary.",
    txtb4:
      "We will proceed with adding new integrations in the future and adding and updating trading functionality to provide our users with a high-level trading experience. Please, share this news and leave your comments about the KuCoin integration.",
  },
  {
    imgp: "./blog/art2_min.png",
    titp: "Local SL/TP orders plus major DOM Surface update",
    url: "local-sltp-orders-plus-major-dom-surface-update",
    txtp: "We are happy to announce a partnership with a popular crypto exchange - KuCoin - bringing the data and trading for over 630 coins with 1,100+ trading pairs. Let’s find out some details about this integration",
    datp: "23/03/2022",
    // keyp: ["integration", "kucoin"],

    key_: {
      integracion: "/",
      kucoin: "/",
    },




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
  },
];


export const BlogDataEn = [
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
