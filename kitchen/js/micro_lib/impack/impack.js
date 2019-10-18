/**
 * Blanja FE @ 2019
 * Name: Impack (Import Package without Webpack)
 * Script Type: Micro Helper 
 * Description: CREATE AND USE DEFER EXTERNAL SCRIPT */
class Impack {
    constructor(sources) {
        this.sources = sources
        this.state = {
            packageId: (() => {
                var ID = ""
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

                for (let i = 0; i<5; i++)
                    ID += possible.charAt(Math.floor(Math.random() * possible.length))

                return ID
            })(),
            isDownloaded: false
        }
    }
    
    /**
     * CREATE DEFER LINK/STYLE EXTERNAL
     * @param {*} styORstyle
     * @param {*} callback 
     */
    createStyle(sty) {
        let link = document.createElement("link")

        link.setAttribute("id", this.state.packageId)
        link.setAttribute("rel", "stylesheet")
        link.type = "text/css"

        if(!(sty.crossorigin === undefined || sty.crossorigin === false)) {
            link.setAttribute("crossorigin", sty.crossorigin)
        }

        link.setAttribute("href", sty.from)

        if(sty.on === "head") {
            document.head.appendChild(link)
        }
        else if(sty.on === "body") {
            document.body.appendChild(link)
        }
        else {
            document.getElementById(sty.on).appendChild(link)
        }
    }

    /**
     * CREATE DEFER SCRIPT EXTERNAL
     * @param {*} scrORscript 
     * @param {*} callback 
     */
    createScript(scr, callback) {
        let script = document.createElement("script")

        script.setAttribute("id", this.state.packageId)
        script.type = "text/javascript"

        if(!(scr.crossorigin === undefined || scr.crossorigin === false)) {
            script.setAttribute("crossorigin", scr.crossorigin)
        }

        script.setAttribute("src", scr.from)

        if(scr.on === "head") {
            document.head.appendChild(script)
        }
        else if(scr.on === "body") {
            document.body.appendChild(script)
        }
        else {
            document.getElementById(scr.on).appendChild(script)
        }

        if(callback !== undefined) {
            if(script.readyState) {  //only required for IE <9
                script.onreadystatechange = function() {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null
                        callback(true)
                    }
                };
            }
            else {  //others
                script.onload = function() {
                    callback(true)
                }
            }
        }
    }
    
    /**
     * EXECUTE SCRIPT AFTER SOURCE LOADED
     * @param {*} callback 
     */
    next(callback) {
        const self = this

        if(this.sources.css !== undefined) {
            let styles = this.sources.css

            for(let i in styles) {
                this.createStyle(styles[i])
            }
        }

        if(this.sources.js !== undefined) {
            let scripts = this.sources.js

            for(let i in scripts) {
                this.createScript(scripts[i], (isLoaded) => {
                    self.state.isDownloaded = isLoaded
    
                    if((parseInt(i)+1) === scripts.length) {
                        if(self.state.isDownloaded) {
                            callback()
                        }
                    }
                })
            }
        }
    }
}