// Add element using React
const heading = React.createElement("h1", {
    id: "title",
    className: "heading1",
    style: {
        color: "red",
        background: "purple"
    }
}, "Heading1");
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "heading2");
const container = React.createElement("div", {
    className: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
