const products = [
    {
        id: 1,
        title: "Tableta de Chocolate con Leche y Almendras",
        price: 4190.00,
        img: "https://placehold.co/300x200/5a3d2a/ffffff?text=Tableta+Almendras",
        category: "Tabletas",
        stock: 55,
        description: "Clásica tableta de chocolate suizo con leche, enriquecida con trozos crujientes de almendras tostadas. Equilibrio perfecto de dulzura y textura."
    },
    {
        id: 2,
        title: "Trufas de Chocolate Negro (Caja de 6)",
        price: 9590.00,
        img: "https://placehold.co/300x200/301a0e/ffffff?text=Trufas+Negras",
        category: "Bombones",
        stock: 22,
        description: "Exquisitas trufas artesanales de ganache de chocolate negro (70% cacao), recubiertas con una fina capa de cacao en polvo. Intensas y suaves a la vez."
    },
    {
        id: 3,
        title: "Bombones Surtidos Artesanales (Caja de 12)",
        price: 17990.00,
        img: "https://placehold.co/300x200/964B00/ffffff?text=Bombones+Surtidos",
        category: "Bombones",
        stock: 18,
        description: "Selección premium de doce bombones, incluyendo rellenos de caramelo salado, avellana y licor de naranja. Ideal para regalar."
    },
    {
        id: 4,
        title: "Chocolate Caliente Premium (Vaso Grande)",
        price: 5090.00,
        img: "https://placehold.co/300x200/6f4e37/ffffff?text=Chocolate+Caliente",
        category: "Bebidas",
        stock: 999,
        description: "Bebida espesa y cremosa, preparada con cacao 100% puro y leche fresca. Se sirve muy caliente, perfecto para el frío."
    },
    {
        id: 5,
        title: "Barra de Chocolate Blanco con Frutos Rojos",
        price: 4550.00,
        img: "https://placehold.co/300x200/ffffff/5a3d2a?text=Chocolate+Blanco",
        category: "Tabletas",
        stock: 40,
        description: "Barra de sedoso chocolate blanco de alta calidad con trozos liofilizados de fresas y frambuesas. Dulce, ácido y visualmente atractivo."
    },
    {
        id: 6,
        title: "Cakepops de Vainilla y Chocolate",
        price: 2490.00,
        img: "https://placehold.co/300x200/e0b991/301a0e?text=Cakepops",
        category: "Repostería",
        stock: 30,
        description: "Deliciosos bizcochos de vainilla y chocolate cubiertos de glaseado y montados en un palito. El postre perfecto para llevar."
    },
    {
        id: 7,
        title: "Fondue de Chocolate para Compartir",
        price: 11390.00,
        img: "https://placehold.co/300x200/a0522d/ffffff?text=Fondue+Chocolate",
        category: "Bombones",
        stock: 15,
        description: "Un tazón de chocolate con leche fundido, acompañado de frutas frescas (fresas, plátano) y malvaviscos para sumergir."
    },
    {
        id: 8,
        title: "Tableta de Chocolate Negro 85% Cacao",
        price: 4350.00,
        img: "https://placehold.co/300x200/301a0e/ffffff?text=Cacao+85",
        category: "Tabletas",
        stock: 45,
        description: "Tableta de alto contenido de cacao para los amantes de lo amargo. De sabor intenso, con notas frutales y terrosas."
    },
    {
        id: 9,
        title: "Mug Cake de Doble Chocolate (Individual)",
        price: 3150.00,
        img: "https://placehold.co/300x200/5a3d2a/ffffff?text=Mug+Cake",
        category: "Repostería",
        stock: 60,
        description: "Postre individual de bizcocho húmedo de doble chocolate, listo para calentar y disfrutar con una cuchara."
    },
    {
        id: 10,
        title: "Caja Degustación de Bombones (24 unidades)",
        price: 32900.00,
        img: "https://placehold.co/300x200/8B4513/ffffff?text=Caja+24+Bombones",
        category: "Bombones",
        stock: 10,
        description: "Caja de lujo con 24 variedades únicas, incluyendo rellenos de maracuyá, whisky y pimienta rosa. Presentación ideal para regalo."
    },
    {
        id: 11,
        title: "Frappé de Menta y Chocolate",
        price: 6100.00,
        img: "https://placehold.co/300x200/6f4e37/ffffff?text=Frappe+Menta",
        category: "Bebidas",
        stock: 70,
        description: "Bebida helada y refrescante. Combina el sabor de chocolate amargo con un toque fresco de menta y crema batida."
    },
    {
        id: 12,
        title: "Galletas de Chispas de Chocolate (Pack 5)",
        price: 3990.00,
        img: "https://placehold.co/300x200/e0b991/301a0e?text=Galletas+Chips",
        category: "Repostería",
        stock: 85,
        description: "Clásicas galletas caseras, grandes y suaves (chewy), con abundantes chispas de chocolate con leche."
    },
    {
        id: 13,
        title: "Tableta de Chocolate Ruby (Rosa)",
        price: 5200.00,
        img: "https://placehold.co/300x200/E06B9A/ffffff?text=Chocolate+Ruby",
        category: "Tabletas",
        stock: 35,
        description: "Chocolate natural de color rosa con un sabor afrutado único, sin colorantes ni saborizantes artificiales. Ligeramente ácido."
    },
    {
        id: 14,
        title: "Nibs de Cacao Tostados (Bolsa 100g)",
        price: 3500.00,
        img: "https://placehold.co/300x200/5a3d2a/ffffff?text=Nibs+Cacao",
        category: "Bombones",
        stock: 120,
        description: "Semillas de cacao puras, tostadas y trituradas. Perfectas para añadir textura y sabor amargo a yogures, batidos o repostería."
    },
    {
        id: 15,
        title: "Fondant de Chocolate Amargo",
        price: 6900.00,
        img: "https://placehold.co/300x200/301a0e/ffffff?text=Fondant",
        category: "Tabletas",
        stock: 25,
        description: "Tarta individual con el centro líquido de intenso chocolate amargo. Se sirve tibio, ideal para acompañar con helado."
    },
    {
        id: 16,
        title: "Cacao en Polvo Pátagonico (250g)",
        price: 7800.00,
        img: "https://placehold.co/300x200/6f4e37/ffffff?text=Cacao+Polvo",
        category: "Bombones",
        stock: 90,
        description: "Cacao en polvo de origen premium, ideal para repostería, bebidas y preparaciones gourmet."
    },
    {
        id: 17,
        title: "Trufas de Caramelo Salado (Caja de 6)",
        price: 10500.00,
        img: "https://placehold.co/300x200/964B00/ffffff?text=Trufas+Saladas",
        category: "Bombones",
        stock: 15,
        description: "Trufas rellenas de suave caramelo artesanal con un toque de sal marina, cubiertas de chocolate con leche. La combinación dulce-salada perfecta."
    },
    {
        id: 18,
        title: "Tableta de Chocolate con Leche y Avellanas",
        price: 4800.00,
        img: "https://placehold.co/300x200/5a3d2a/ffffff?text=Tableta+Avellanas",
        category: "Tabletas",
        stock: 50,
        description: "Chocolate con leche cremoso con avellanas enteras tostadas, ofreciendo un sabor intenso a frutos secos."
    },
    {
        id: 19,
        title: "Malteada de Vainilla y Chocolate",
        price: 5800.00,
        img: "https://placehold.co/300x200/e0b991/301a0e?text=Malteada",
        category: "Bebidas",
        stock: 65,
        description: "Batido espeso y frío, elaborado con helado de vainilla, leche y sirope de chocolate. Ideal para los días cálidos."
    },
    {
        id: 20,
        title: "Tarta Sacher (Porción)",
        price: 7100.00,
        img: "https://placehold.co/300x200/964B00/ffffff?text=Tarta+Sacher",
        category: "Repostería",
        stock: 30,
        description: "Porción individual de la famosa tarta austriaca: bizcocho denso de chocolate, capa de mermelada de albaricoque y glaseado de chocolate negro."
    }
];

export default products