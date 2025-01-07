import app, { App, el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";

export function header(){
    el.c("header", "top-header", () => {
        div.c("squeeze", () => {
            el.c("a", "logo").attr("href", "/");
            el.c("nav", "top-nav", () => {
                el.c("a", "nav-item", "About").attr("href", "/about/");
                el.c("a", "nav-item", "Process").attr("href", "/process/");
                el.c("a", "nav-item", "Projects").attr("href", "/projects/");
                el.c("a", "nav-item btn", div.c("inner", "Contact")).attr("href", "/contact/");
                // div.c("nav-item btn", div.c("inner", "Contact"));
            });
        });
    });
}

export function footer(){
    el.c("footer", "footer", () => {
        div.c("squeeze", () => {
            div.c("footer-column", () => {
                el.c("a", "footer-logo").attr("href", "/");
            });
            el.c("nav", "footer-nav", () => {
                h3.c("nav-item", el("a", "Home").attr("href", "/"));
                el.c("a", "nav-item", "About").attr("href", "/about/");
                el.c("a", "nav-item", "Process").attr("href", "/process/");
                el.c("a", "nav-item", "Projects").attr("href", "/projects/");
                el.c("a", "nav-item", "Contact").attr("href", "/contact/");
            });            
            el.c("nav", "footer-nav", () => {
                h3.c("nav-item", el("a", "Projects").attr("href", "/projects/"));
                // el.c("a", "nav-item", "Aurora Addition").attr("href", "/projects/aurora-addition/");    
                // el.c("a", "nav-item", "Elk Grove Kitchen").attr("href", "/projects/elk-grove-kitchen/");    
                // el.c("a", "nav-item", "Lake Forest Kitchen and Bath").attr("href", "/projects/lake-forest-kitchen-and-bath/");
                // el.c("a", "nav-item", "Mount Prospect Bath").attr("href", "/projects/mount-prospect-bath/");
                // el.c("a", "nav-item", "Warrenville Kitchen").attr("href", "/projects/warrenville-kitchen/");
                el.c("a", "nav-item", "Aurora").attr("href", "/projects/aurora-addition/");    
                el.c("a", "nav-item", "Elk Grove").attr("href", "/projects/elk-grove-kitchen/");    
                el.c("a", "nav-item", "Lake Forest").attr("href", "/projects/lake-forest-kitchen-and-bath/");
                el.c("a", "nav-item", "Mount Prospect").attr("href", "/projects/mount-prospect-bath/");
                el.c("a", "nav-item", "Warrenville").attr("href", "/projects/warrenville-kitchen/");
            });
            div.c("footer-contact", () => {
                h3("Contact us today for a free consultation.");
                el.c("a", "btn", "Contact Us");
            });
        });
    });
}