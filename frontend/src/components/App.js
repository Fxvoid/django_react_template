import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function App(props) {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [placeholder, setPlaceholder] = useState("Loading");

    useEffect(() => {
        if (!loaded)
            fetch("api/category/")
                .then(response => {
                    if (response.status > 400) {
                        setPlaceholder("Something went wrong");
                        return null;
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setLoaded(true);
                })
    }, [loaded]);

    return loaded ?
        <ul>
            {data.map(category => {
                return (
                    <li key={category.id}>
                        {category.name} - {category.slug}
                    </li>
                );
            })}
        </ul>
        :
        <h1>
            {placeholder}
        </h1>
}

export default App;

const container = document.getElementById("app");
render(<App/>, container);