import React, { useState, useEffect } from "react";


const App = () => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);


 useEffect(() => {
   setLoading(true);
   fetch("https://dummyjson.com/products")
     .then((response) => response.json())
     .then((json) => {
       setData(json);
       setLoading(false);
     })
     .catch((error) => {
       setError(error);
       setLoading(false);
     });
 }, []);


 if (loading) {
   return <h3>Loading...</h3>;
 }


 if (error) {
   return <h2>An error occurred: {error.message}</h2>;
 }


 if (!data) {
   return <h3>No data found</h3>;
 }


 return (
   <div>
     <div>Data Fetched from API</div>
     <pre>{JSON.stringify(data, null, 2)}</pre>
   </div>
 );
};


export default App;