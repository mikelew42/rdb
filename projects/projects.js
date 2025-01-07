import { el, div, View, h1, h2, h3, p, is, Base } from "/module/app.js";

class Project {

    preview(){
        div.c("project-preview", () => {
            // div.c("img").attr("src", this.img);
            h3(this.name);
            p(this.description);
        }).style("background-image", `url(${this.img})`);
    }

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
        img: "/projects/aurora-addition/img/aurora-addition-main.jpg",
        imgs: [
            "/projects/aurora-addition/img/aurora-addition-1.jpg",
        ],
        name: "Aurora Addition",
        description: "This is a description of the Aurora Addition project."
    })
};