/**
 * REACT MICRO APP HERE!
 */
new Impack({
    js: [
        {
            from: "https://unpkg.com/react@16/umd/react.development.js",
            crossorigin: true,
            on: "head"
        },
        {
            from: "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
            crossorigin: true,
            on: "head"
        }
    ]
}).next(() => {
    /**
     * Include React Micro Component
     */
    new Impack({
        js: [
            { from: "./react-cdn/h1.js", on: "head" },
            { from: "./react-cdn/hr.js", on: "head" },
            { from: "./react-cdn/p.js", on: "head" }
        ]
    }).next(() => {
        class WelComponent extends React.Component {
            constructor() {
                super()
                this.state = {
                    time: new Date().toLocaleTimeString()
                }
            }
    
            render() {
                return (
                    <div style={{ width: "100%", height: "100vh", backgroundColor: "#f4f4f4" }}>
                        <h1 style={{ margin: "auto" }}>{this.state.time.toString()}</h1>
                        <H1C title="Lorem Ipsum" />
                        <HRC />
                        <PC text="Lorem ipsum dolor sit amet esdipicing kofet." />
                    </div>
                )
            }
    
            componentDidMount() {
                const self = this
    
                this.setState({ time: new Date().toLocaleTimeString()})
    
                setTimeout(() => { self.componentDidMount() }, 1000)
            }
        }
    
        ReactDOM.render(<WelComponent />, document.getElementById("root"))
    })
})