const fs = require('fs');
const apps = [];

fs.readdirSync(`${process.cwd()}/frontend/public/apps/`).forEach((element) => {
	const app = {
		name: element,
		html: fs.readFileSync(`${process.cwd()}/frontend/public/apps/${element}/index.html`,'utf8'),
		style: fs.readFileSync(`${process.cwd()}/frontend/public/apps/${element}/style.css`,'utf8'),
	};
	apps.push(app);
});

module.exports = apps;