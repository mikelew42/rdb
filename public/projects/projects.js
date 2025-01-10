import { el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";
import { header, footer } from "/rdb.js";

const body = View.body();

class Project {

    preview(){
        el.c("a", "project-preview", () => {
            // div.c("img").attr("src", this.img);
            h3(this.name);
        }).style("background-image", `url(${this.img})`)
            .attr("href", this.url);
    }

    page(){
        body.ac("project-page");
        header();
        div.c("banner", () => {
            div.c("chevron");
            h1(this.name);
        }).style("background", `url("${this.img}") no-repeat center / cover`);
        div.c("main-wrap", () => {
            el.c("main", "squeeze content",() => {
                this.content();
            });
        });
        footer();
    }

    content(){}

	constructor(...args){
		this.instantiate(...args);
	}

	instantiate(...args){
		// this.name = this.constructor.name.toLowerCase();
		// this.type = this.constructor.name;
		this.assign(...args);
		this.initialize();
	}

	initialize(){}

	assign(...args){
		return Object.assign(this, ...args);
	}
}


export default {
    aurora: new Project({
        url: "/projects/aurora-addition/",
        img: "/projects/aurora-addition/img/main.jpg",
        imgs: [
            "/projects/aurora-addition/img/aurora-addition-1.jpg",
        ],
        name: "Aurora Addition",
        description: "This is a description of the Aurora Addition project."
    }),
    elk_grove: new Project({
        url: "/projects/elk-grove-kitchen/",
        img: "/projects/elk-grove-kitchen/img/main.jpg",
        imgs: [
            "/projects/elk-grove-kitchen/img/elk-grove-kitchen-1.jpg",
        ],
        name: "Elk Grove Kitchen",
        description: "This is a description of the Elk Grove Kitchen project."
    }),
    lake_forest: new Project({
        url: "/projects/lake-forest-kitchen-and-bath/",
        img: "/projects/lake-forest-kitchen-and-bath/img/main.jpg",
        imgs: [
            "/projects/lake-forest-kitchen-and-bath/img/lake-forest-kitchen-and-bath-1.jpg",
        ],
        name: "Lake Forest Kitchen and Bath",
        description: "This is a description of the Lake Forest Kitchen and Bath project."
    }),
    mount_prospect: new Project({
        url: "/projects/mount-prospect-bath/",
        img: "/projects/mount-prospect-bath/img/main.jpg",
        imgs: [
            "/projects/mount-prospect-bath/img/mount-prospect-bath-1.jpg",
        ],
        name: "Mount Prospect Bath",
        description: "This is a description of the Mount Prospect Bath project."
    }),
    warrenville: new Project({
        url: "/projects/warrenville-kitchen/",
        img: "/projects/warrenville-kitchen/img/main.jpg",
        imgs: [
            "/projects/warrenville-kitchen/img/warrenville-kitchen-1.jpg",
        ],
        name: "Warrenville Kitchen",
        description: "This is a description of the Warrenville Kitchen project."
    })
};