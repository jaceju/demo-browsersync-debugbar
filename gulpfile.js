var elixir = require('laravel-elixir');
require('laravel-elixir-serve');
require('laravel-elixir-browser-sync');

elixir(function(mix) {
	var port = 8000;
    mix.less('app.less')
        .serve({
            port: port
        })
        .browserSync(null, {
            proxy: 'localhost:' + port,
            reloadDelay: 2000
        });
});
