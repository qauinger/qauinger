import {projects} from './projects/projects.js';

export function load() {
    return {
        summaries: projects.map((project) => ({
            id: project.id,
            title: project.title
        }))
    };
}