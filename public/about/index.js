import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer, projects } from "/rdb.js";

// is this necessary?
await app.ready;

const body = View.body();
body.ac("about-page")
div.c("backgrounds", () => {
    div.c("background herringbone");
});

header();
div.c("banner", () => {
    div.c("chevron");
    h1("Our Company");
}).style("background-image", `url("/img/about_banner.jpg")`).style("background-position", "center 0%");

div.c("main-wrap squeeze", () => {
    el.c("main", "content",() => {
        p.c("intro", "Feel comfortable with the contractor you choose.  With over forty years of construction and remodeling experience, we take great pride in making customer satisfaction our first priority by exceeding your expectations.")
    
        el.c("img", "content-image").attr("src", "/about/ai_bathroom.jpg");

        div.c("content-squeeze", () => {
            h3("RDB Remodeling Group");
            p("We are dedicated to guiding you through every phase of your project. We collaborate with top architects, craftsmen, and designers in Chicagoland to bring your vision to life. Whether you need full design services or have already started with your own architect, we can assist with any or all aspects of your project. From defining the scope and budget to finalizing drawings and material specifications, our team ensures every detail is expertly managed. Whatever your needs, our construction team can build it.");
        });
    
    
    });

    div.c("about-blocks", () => {
        div.c("about-experience-row about-columns columns", () => {
            div.c("about-experience about-block", () => {
                h3("Experience");
                p("RDB Remodeling Group has handled commercial and residential projects on many scales.  Our people know what your project needs, no matter what size.  Our policy of exclusively hiring forward-thinking innovators and managers means that we always create functional solutions to meet your needs at surprisingly reasonable costs.")
            });
            div.c("about-experience-image about-column-image");
        });
        div.c("about-logo-row");
        div.c("about-communication-row about-columns columns", () => {
            div.c("about-communication-image about-column-image");
            div.c("about-communication about-block", () => {
                h3("Communication");
                p("We prioritize clear and consistent communication throughout your remodel to ensure a stress-free experience. From regular updates on progress to addressing any questions or concerns promptly, we keep you informed every step of the way. Our goal is to make the process smooth, transparent, and tailored to your needs.")
            });
        });
    })
});

footer();