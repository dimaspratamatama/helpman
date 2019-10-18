/**
 * Blanja FE @ 2019
 * Name: CUI (Create Reusable DOM UI)
 * Script Type: Create Element/UI
 * Description: CREATE AND BUILD TEMPLATE */
class CUI {
  constructor() {}

  /* Method for bulking `DOM String` attribute */
  collectAttribute(attr) {
    pointer.vesselStr = ""

    Object.keys(attr).forEach(function(i) {
      pointer.vesselStr += " "+i+"=\""+attr[i]+"\""
    });

    return pointer.vesselStr
  }

  /* Create UI DOM STRING/NATIVE DOM - string("div", { class: "wrapper" }, ["Hi!"]) */
  string(type, attr, children) {
    pointer.vesselStr   = ""
    pointer.fill        = ""
    pointer.attr_exists = !((attr === undefined) || (attr === null)) ? true : false
    pointer.body_exists = (body !== undefined || body !== null) ? true : false

    if(type === "input" || type === "hr" || type === "img") {
      pointer.vesselStr += "<"+type

      if(pointer.attr_exists) {
        pointer.vesselStr += this.collectAttribute(attr)
      }

      pointer.vesselStr += ">"
    }
    else {
      pointer.vesselStr += "<"+type

      if(pointer.attr_exists) {
        pointer.vesselStr += this.collectAttribute(attr)
      }

      if(pointer.body_exists) {
        for(pointer.i in children){
          pointer.fill += body[pointer.i]
        }
      }

      pointer.vesselStr += ">"
      pointer.vesselStr += pointer.fill
      pointer.vesselStr += "</"+type+">"
    }

    return pointer.vesselStr
  }

  /* Create UI Actual DOM - dom("div", { class: "wrapper" }, ["Hi!"]) */
  dom(type, attr, children) {
    const dom = document.createElement(type)

    for(let key in attr) {
      if(key === "style") {
        Object.keys(attr[key]).forEach((k) => {
          dom.style[k] = attr[key][k]
        })
      }
      else {
        dom.setAttribute(key, attr[key])
      }
    }

    if(typeof children === "object") {
      if(children.string === undefined) {
        children.forEach(child => {
          if(typeof child === "string") {
            dom.appendChild(document.createTextNode((child).toString()))
          }
          else {
            dom.appendChild(child)
          }
        })
      }
      else {
        dom.innerHTML = children.string
      }
    }
    else {
      if(typeof children === "string") {
        dom.appendChild(document.createTextNode((children).toString()))
      }
      else {
        dom.appendChild(children)
      }
    }

    return dom
  }
}

const Cui = new CUI()