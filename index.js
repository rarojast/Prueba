'use strict';
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
    port: 3000,
    host: "localhost",
    routes: {
        files: {
            relativeTo: './public'
        }
    }
});

const init = async function () {
    await server.register(Inert);
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello, world!';
        }
    });
    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: '..',
                redirectToSlash: true,
                index: true,
            }
        }
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
