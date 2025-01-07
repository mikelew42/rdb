import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer } from "/rdb.js";
import projects from "/projects/projects.js";

View.stylesheet("/styles.css");

await app.ready;

header();

h1("Aurora Addition");

for (let project_name in projects){
    let project = projects[project_name];
    
    project.preview();
}

footer();