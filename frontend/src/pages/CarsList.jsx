import { useEffect, useState } from "react";
import Card from "../components/Card";

export const CarsList = () => {
   const data = [
      { id: 1, name: "Fiat", year: 2023, model: "Panda", price: 12000 },
      { id: 2, name: "Peugeot", year: 2018, model: "308", price: 16000 },
      { id: 3, name: "Ford", year: 2022, model: "Mustang", price: 25000 },
      { id: 4, name: "Renault", year: 2019, model: "Clio", price: 18000 },
      { id: 5, name: "Citroen", year: 2021, model: "C3 Aircross", price: 22000 },
      { id: 6, name: "Toyota", year: 2020, model: "Yaris", price: 15000 },
      { id: 7, name: "Volkswagen", year: 2021, model: "Golf", price: 28000 },
      { id: 8, name: "BMW", year: 2022, model: "M3", price: 45000 },
      { id: 9, name: "Mercedes", year: 2021, model: "A-Class", price: 35000 },
      { id: 10, name: "Audi", year: 2022, model: "A6", price: 40000 },
    ];
  
    const [budget, setBudget] = useState(20000);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
  
    // const fetchUsers = () => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data));
    // };
  
    // useEffect(() => {
    //   fetchUsers();
    // }, []);
  
    useEffect(() => {
      fetch(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
        .then((response) => response.json())
        .then((json) => setUsers(json["data"]));
    }, [page]);

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <div className="mb-4 space-y-5">
        <h2>Your budget is {budget}</h2>

        <label htmlFor="budget">Budget : </label>
        <input 
          type="number" 
          className="text-black" 
          step={1000} 
          id="budget" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data
          .filter((el) => el.price <= budget)
          .map((el) => {
            return <Card car={el} key={el.id} />;
          })}
      </div>

      {/* <h2 className="mb-4">List of users</h2>
      <div className="grid grid-cols-3 gap-4">
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      </div> */}

      <div>
        <button
          className="border border-gray-500 rounded-md p-2 m-5"
          onClick={() => {
            page === 1 ? setPage(2) : setPage(1);
          }}
        >
          Toggle users
        </button>
        <ul>
          {users &&
            users.map((el) => {
              return <li key={el.id}>{el.email}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};