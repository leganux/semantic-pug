const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { link } = require('fs');

const app = express();
const port = 3000;

// Configurar CORS
app.use(cors());

// Configurar Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el logger
app.use(morgan('dev'));

// Configurar Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Configurar Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/semantic', express.static(path.join(__dirname, 'semantic/')));

// Rutas
app.get('/', (req, res) => {
    res.render('index', {
        template: {
            navbar: {
                title: "leganux",
                logo: "https://leganux.com/cdn/components2/images/circullogo.png",
                logoLink: "https://leganux.com",
                showLogo: true,
                showTitle: true,
                leftMenu: true,
                logoWidth: '25px',
                logoHeight: '50px',
                search: true,
                searchPlaceholder: "Buscar",
                searchId: 'findMenu',
                items: [
                    {
                        type: "dropdown",
                        title: "Tiene submenu",
                        items: [
                            { link: "#", title: "link 1", icon:"edit"},
                            { link: "#", title: "link 2", actionClass: "logout", active: true },
                        ]
                    },
                    {
                        type: "link",
                        title: "link 1 ",
                        link: "#",
                        actionClass: "logout"
                    },
                    {
                        type: "divider",

                    },
                    {
                        type: "link",
                        title: "link 123 ",
                        icon: "user",
                        link: "#",
                        actionClass: "logout"
                    }
                ]
            },
            leftMenu: {
                search: true,
                searchPlaceholder: "Buscar",
                searchId: 'findLeftMenu',
                items: [
                    {
                        type: "parent",
                        title: "Tiene submenu",
                        items: [
                            { link: "#", title: "link 1", icon: 'edit' },
                            { link: "#", title: "link 2", actionClass: "logout", active: true },
                        ]
                    },
                    {
                        type: "link",
                        title: "link 1 ",
                        link: "#",
                        actionClass: "logout"
                    },
                    {
                        type: "link",
                        title: "link 123 ",
                        icon: "edit",
                        link: "#",
                        actionClass: "logout"
                    },

                    {
                        type: "divider",

                    },
                    {
                        type: "link_icon",
                        title: "Edit ",
                        icon: "edit",
                        link: "#",
                        actionClass: "logout"
                    },
                ]
            }


        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
