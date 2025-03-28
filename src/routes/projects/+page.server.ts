import {projects} from './projects.js';

export function load() {
	return {
		summaries: projects.map((project) => ({
			id: project.id,
			description: project.description,
			title: project.title,
			live_link: project.live_link,
			images: project.images,
			skills: project.skills,
			blog: project.blog
		}))
	};
}