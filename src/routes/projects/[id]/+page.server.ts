import {error} from '@sveltejs/kit';
import {projects} from '../projects.js';

export function load({params}) {
	const project = projects.find((project) => project.id === params.id);

	if (!project) error(404);

	return {
		project
	};
}