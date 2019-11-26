var dist = require('distruct');

global.fs = require('fs');
dist.config('./config.json');
dist.build();
dist.serve();