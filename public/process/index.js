import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer, projects } from "/rdb.js";

// is this necessary?
await app.ready;

const body = View.body();
body.ac("process-page")
div.c("backgrounds", () => {
    div.c("background herringbone");
});

header();
div.c("banner", () => {
    div.c("chevron");
    h1("Our Process");
}).style("background-image", `url("/img/process_banner.jpg")`);
div.c("main-wrap squeeze", () => {
    el.c("main", "content",() => {
        p.c("intro", "From planning your dream remodel to delivering flawless results, our streamlined process ensures clarity, quality, and exceptional craftsmanship every step of the way.");

        div.c("columns process-getting-started", () => {
            div.c("column column-left column-image").style("background-image", `url("/process/process1.jpg")`);
            div.c("column column-right", () => {
                h3("Getting Started");
                p("Define your goals and priorities for the remodel. Gather inspiration from websites, magazines, or TV makeover shows, and note design ideas, products, and features you love. With your input and our expertise, RDB will craft a design tailored to your vision.");
            });
        });        
        
        div.c("columns process-determining", () => {
            div.c("column column-left", () => {
                h3("Determining Your Budget");
                p("Understand what you can afford and how your remodel can boost your home's value. Updates like kitchens, master suites, and bathrooms can often offer significant returns on investment.");
                p("We offer a free consultation to discuss your project scope, needs, and budget. Afterward, we’ll provide an Overview Budget Proposal within a week, giving you a realistic cost estimate to review and refine.");
            });
            div.c("column column-right column-image").style("background-image", `url("/process/process_stairs.jpg")`);
        });    
        
        div.c("columns process-project", () => {
            div.c("column column-left column-image").style("background-image", `url("/process/process_addition.jpg")`);
            div.c("column column-right", () => {
                h3("Project Management");
                p("We meticulously plan every detail before construction begins. A dedicated Construction Manager oversees daily operations, coordinates schedules, and ensures smooth progress.");
                p("A detailed Construction Schedule will track progress and keep you informed.  When construction ends, we’ll complete a final Customer Punch List to ensure every detail is perfect before project close.");
            });
        });
    });
});
footer();