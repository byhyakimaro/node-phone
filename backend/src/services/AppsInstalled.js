const fs = require('fs');

export default {
	async getApps() {
		var data = fs.readFileSync(__dirname + '/src/', 'utf8');
	}
} 