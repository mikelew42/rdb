import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer, chevron } from "/rdb.js";
import projects from "/projects/projects.js";


await app.ready;

header();
div.c("banner", () => {
    div.c("chevron");
    h1("Styles");
}).style("background-image", `url("/projects/warrenville-kitchen/img/banner.jpg")`);
el.c("main", "squeeze content",() => {
    div.c("chevron");
    h1("This is an H1.");
    el.c("a", "btn", "Contact Us", chevron()).attr("href", "/contact/");
    h2("This is an H2.");
    p("This is a paragraph.  Here's some filler text.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    h3("This is an H3.");
    p("This is a paragraph.  Here's some filler text.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    div.c("columns", () => {
        div.c("column", () => {
            
            h3("This is an H3.");
            p("This is a paragraph.  Here's some filler text.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

            h1("This is an H1, but a little longer, so that it wraps onto several lines.")
        });        
        div.c("column", () => {
            
            h3("This is an H3.");
            p("This is a paragraph.  Here's some filler text.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
            h2("This is an H2, but a little longer, so that it wraps onto several lines. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        });
    });
});
footer();