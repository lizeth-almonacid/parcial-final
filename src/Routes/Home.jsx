import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [Dentists, setDentists] = useState([]);
  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setDentists(data);
  };
  useEffect(() => {
    getDentists();
  }, []);
  return (
    <>
      <div>
        <h1>Home</h1>
        <div className="card-grid">
          {Dentists.length &&
            Dentists.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                username={item.username}
                id={item.id}
                url={item.website}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
