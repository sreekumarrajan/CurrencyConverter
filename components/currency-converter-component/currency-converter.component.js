const currentDocument = document.currentScript.ownerDocument;

class CurrencyConverter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});

    // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
    // Current document needs to be defined to get DOM access to imported HTML
    const template = currentDocument.querySelector('#currency-converter-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);


  //   // Fetch the data for that user Id from the API and call the render method with this data
  //   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //     .then((response) => response.text())
  // .then((responseText) => {
  //     this.render(JSON.parse(responseText));
  // })
  // .catch((error) => {
  //     console.error(error);
  // });
  }
}

customElements.define('currency-converter', CurrencyConverter);