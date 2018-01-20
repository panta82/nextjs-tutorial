const express = require('express');
const next = require('next');

const options = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 39000
};

const app = next({ dev: options.dev });
const handle = app.getRequestHandler();

process.on('SIGINT', exitSignal);
process.on('SIGTERM', exitSignal);

app
	.prepare()
	.then(() => {
		const server = express();

		server.get('/p/:id', (req, res) => {
			return app.render(req, res, '/post', {
				title: req.params.id
			});
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(options.port, err => {
			if (err) {
				throw err;
			}

			console.log(`Listening on http://localhost:${options.port}/`);
		});
	})
	.catch(err => {
		console.error(`FATAL ERROR!`);
		console.error(err);
		process.exit(1);
	});

function exitSignal(signal) {
	console.log(`Received ${signal}, exiting`);
	process.exit(0);
}
