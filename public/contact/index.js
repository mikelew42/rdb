import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer, projects } from "/rdb.js";

// is this necessary?
await app.ready;

header();

div.c("banner", () => {
    div.c("chevron");
    h1("Contact Us");
}).style("background-image", `url("/img/process_banner.jpg")`);

div.c("main-wrap", () => {
    el.c("main", "squeeze content",() => {
        
    });
});

footer();