/**
 * Blanja FE @ 2019
 * Name: CEMPLATE (All About Template)
 * Script Type: Create Element/UI
 * Description: CREATE AND BUILD TEMPLATE */
class CEMPLATE {
    constructor() {}

    /* APPEND DOM */
    append(any, dom) {
        if(typeof any === "string") {
            dom.appendChild(document.createTextNode(any))
        }
        else {
            dom.appendChild(any)
        }
    }
  
    /* REFRESH DOM - WHOLE CHOSEN */
    refresh(components, dom) {
        while(dom.firstChild) {
            dom.removeChild(dom.firstChild)
        }
    
        dom.appendChild(components)
    }
    
    /* INNER DOM */
    inner(strings, dom) {
        return dom.innerHTML = strings
    }
}

const Cemplate = new CEMPLATE()