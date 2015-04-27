var Path = require('path');
var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();
server.connection({port: (process.env.PORT || 5000) });

var defaultContext = {
	title: 'Node Hapi Bootstrap Example Server/Site'
};

//templates
server.views({
	engines: {
		html: require('handlebars')
	},
	context: defaultContext,
	relativeTo: __dirname,
	path: './views',
	layoutPath: './views/layouts'
});

//static files
server.route({
	method: 'GET',
	path: '/inc/{param*}',
	handler: {
		directory: {
			path: 'inc',
			listing: true,
			index: true
		}
	}
})

//actual routes for views/pages

server.route({
	method: 'GET',
	path: '/',
	handler: {
		view: 'index'
	}
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function (request, reply){
		reply.view('index', {
			name: request.params.name
		});
	}
});

//start server with logging
server.register({
	register: Good,
	options: {
		reporters: [{
			reporter: require('good-console'),
			events: {
				response: '*',
				log: '*'
			}
		}]
	}
}, function(err) {
	if(err){
		throw err;
	}

	server.start(function (){
		console.log('Server running at: ', server.info.uri);
	});
});

//start server without logging
// server.start(function (){
// 	console.log('Server running at: ', server.info.uri);
// });
