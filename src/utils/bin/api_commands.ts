// // List of commands that require API calls

import { getProjects } from '../api';

export const repos = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue" style="text-decoration: underline<" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};
