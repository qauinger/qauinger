import {projects} from './projects.js';

export function load() {
	return {
		summaries: projects.map((project) => ({
			id: project.id,
			title: project.title,
			live_link: project.live_link,
			download_link: project.download_link,
			teaser: project.teaser,
			images: project.images,
			skills: project.skills,
		}))
	};
}