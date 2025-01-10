import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer, projects } from "/rdb.js";

// is this necessary?
await app.ready;

header();

div.c("banner", () => {
    div.c("chevron");
    h1("Recent Projects");
}).style("background-image", `url("/projects/warrenville-kitchen/img/banner.jpg")`);

div.c("main-wrap squeeze", () => {
    el.c("main", "content",() => {
        for (let project_name in projects){
            let project = projects[project_name];
            
            project.preview();
        }
    });
});

footer();