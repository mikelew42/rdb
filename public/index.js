import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer, chevron } from "/rdb.js";
import projects from "/projects/projects.js";


await app.ready;

View.body().ac("home transparent-header");

window.addEventListener("scroll", () => {
    console.log("scrollY", window.scrollY);
    if (window.scrollY > 165){
        View.body().rc("transparent-header");
    } else {
        View.body().ac("transparent-header");
    }
});

header();

el.c("section", "hero", () => {
    div.c("squeeze", () => {
        div.c("content", () => {
            div.c("chevron");
            h2("Make ", el.c("span", "your", "your"), " home ", el.c("span", "dreamworthy", "dreamworthy"), ".");
            p("Imagine waking up every day in a home you absolutely love. That dream is within reach, and now is the perfect time to make it real.");
            div.c("btn-row", () => {
                el.c("a", "btn white", "Learn More", chevron()).attr("href", "/about/");
                el.c("a", "btn", "Get Started", chevron()).attr("href", "/contact/");
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

el.c("section", "recent-projects has-backgrounds", () => {
    div.c("backgrounds", () => {
        div.c("background background-white");
        div.c("background herringbone");
    });
    div.c("squeeze", () => {
        div.c("projects-left", () => {
            div.c("rdb-heading", () => {0
                div.c("chevron");
                h2("Recent Projects");
            });
            
            projects.mount_prospect.preview();
            projects.elk_grove.preview();
        });        
        div.c("projects-right", () => {
            projects.aurora.preview();
            projects.lake_forest.preview();
            projects.warrenville.preview();
        });
    });
});

el.c("section", "cta", () => {
    div.c("squeeze", () => {
        h3("Send us a message to get started.");
        el.c("a", "btn", "Contact Us", chevron()).attr("href", "/contact/");
    });
});

el.c("section", "process", () => {
    div.c("squeeze", () => {
        div.c("rdb-heading", () => {0
            div.c("chevron");
            h2("Our Process");
        });

        div.c("columns 3-column", () => {
            div.c("col", () => {
                h3("Getting Started");
                p("What are your goals and priorities for your remodel?  Make your wish list and we can start with what you want most.");
            });
            div.c("col", () => {
                h3("Budget");
                p("How much can you afford to spend?  Our initial consultation is free.  Give us a call or just send us a message to set up an estimate.");
            });
            div.c("col", () => {
                h3("Project Management");
                p("Each project has a qualified Construction Manager that is dedicated to delivering your project to you as planned.");
            });
        });
        
        div.c("btn-right", () => {
            el.c("a", "btn", "Read More", chevron()).attr("href", "/process/");
        });
    });
});

el.c("section", "transform", () => {
    div.c("transform-left", () => {});
    div.c("transform-right", () => {
        div.c("transform-right-content", () => {
            // h3("Transform your ", el.c("span", "home", "home"), ".");
            h3("Transform your ", el.c("span", "home", "home"), ".  Upgrade your ", el.c("span", "life", "life"), ".");
            // h3("Upgrade your ", el.c("span", "life", "life"), ".");
            p("Your home should evolve with your needs, and renovations are the perfect way to bring your vision to life. Whether it’s a modern kitchen, a luxurious bathroom, or a refreshed living space, we specialize in creating stunning transformations.")
            div.c("btn-right", () => {
                el.c("a", "btn", "Get Started", chevron()).attr("href", "/contact/");
            });
        });
        div.c("transform-fill");
    });
});

el.c("section", "testimonials", () => {
    div.c("background herringbone", () => {});
    div.c("squeeze", () => {
        div.c("rdb-heading", () => {
            div.c("chevron");
            h2("Testimonials");
        });
        div.c("columns 3-column", () => {
            div.c("testimonial", () => {
                h3("Kathy T.");
                div.c("stars");
                p("Bob came highly recommended by a friend. He was very easy to work with throughout the entire process.  3.5 years later, our house still looks amazing!");
                el.c("span", "via", "via Google");
            });
            div.c("testimonial", () => {
                h3("Jill A.");
                div.c("stars");
                p("We are very happy with the work and love our new bathrooms. Bob is a pleasure to work with and brings a wealth of knowledge in design as well as expert craftsmanship.");
                el.c("span", "via", "via Angi");
            });
            div.c("testimonial", () => {
                h3("Joshua S.");
                div.c("stars");
                p("We've had Bob handle multiple renovations for us in the last 4 years and couldn’t be happier with the service, quality and general knowledge Bob brings to the table.");
                el.c("span", "via", "via Angi");
            });
        });
    });
});
    
footer();