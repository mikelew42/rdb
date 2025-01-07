import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer } from "/rdb.js";
import projects from "/projects/projects.js";


View.stylesheet("/styles.css");

await app.ready;

console.log("app.ready", performance.now());

header();

el.c("section", "hero", () => {
    div.c("squeeze", () => {
        div.c("content", () => {
            div.c("chevron");
            h2("Make ", el.c("span", "your", "your"), " home ", el.c("span", "dreamworthy", "dreamworthy"), ".");
            p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");
            div.c("btn-row", () => {
                el.c("a", "btn white", "Learn More").attr("href", "/about/");
                el.c("a", "btn", "Get Started").attr("href", "/contact/");
            });
        });
    });
});

div.c("rdb-bar", () => {
    div.c("squeeze", () => {
        h2.c("remodel", "remodel");
        h2.c("design", "design");
        h2.c("build", "build");
    });
});

div.c("recent-projects", () => {
    div.c("background", () => {});
    div.c("squeeze", () => {
        div.c("projects-left", () => {
            div.c("heading", () => {0
                div.c("chevron");
                h2("Recent Projects");
            });
            
            projects.aurora.preview();

            div.c("project", () => {
                div.c("img");
                h3("Project Name");
                p("Project Description");
            });
            div.c("project", () => {
                div.c("img");
                h3("Project Name");
                p("Project Description");
            });
        });        
        div.c("projects-right", () => {
            div.c("project", () => {
                div.c("img");
                h3("Project Name");
                p("Project Description");
            });
            div.c("project", () => {
                div.c("img");
                h3("Project Name");
                p("Project Description");
            });
            div.c("project", () => {
                div.c("img");
                h3("Project Name");
                p("Project Description");
            });
        });
    });
});

div.c("rdb-bar", () => {
    div.c("squeeze", () => {
        h2.c("remodel", "remodel");
        h2.c("design", "design");
        h2.c("build", "build");
    });
});
    
p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");
p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");
p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");

div.c("rdb-bar", () => {
    div.c("squeeze", () => {
        h2.c("remodel", "remodel");
        h2.c("design", "design");
        h2.c("build", "build");
    });
});
    
p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");
p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");
p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");

footer();