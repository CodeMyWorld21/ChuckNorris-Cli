#!/usr/bin/env node

/**
 * ServiceCli
 * cli to show, kill, and run new services
 *
 * @author Anonymous User <https://youtu.be/dfTpFFZwazI>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

console.log(flags);

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);
	
	if(flags.type != 'explicity'){
			flags.type = "nerdy"
	}
	if(input.includes('joke')){
		const res = await axios.get(
			'https://api.icndb.com/jokes/random?LimitTo=[${flags.type}]'
		);
		console.log(res.data.value.joke);
	}
})();
