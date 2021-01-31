import { recurse } from 'file-system'

export function importProjects() {
	let catalogue = []

	recurse('./../data/projects', (path, rpath, name) => {
		catalogue.push(name);
		console.log(path, rpath, name)
	});

	console.log(catalogue)
}