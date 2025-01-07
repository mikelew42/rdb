class ProjectCard extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('project-card-template').content;
      const shadow = this.attachShadow({ mode: 'open' });
      console.log(this.shadowRoot == shadow);
      shadow.appendChild(template.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['image'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'image') {
        this.shadowRoot.querySelector('.image').src = newValue;
      }
    }
  }
  
  customElements.define('project-card', ProjectCard);
  