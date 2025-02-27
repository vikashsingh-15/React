import React from "react";
import "./books.css";
import Card from "./Card";

export default function Books({ bookprop }) {
  console.log(bookprop);
  //axios call here
  return (
    <>
      <div className="custom-books">
        {bookprop?.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              author={item.author}
              published={item.publishedYear}
              genre={item.genre}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}

//instead of fetching here we will fetch in app.js and pass the data as props to this component
//and then we will map over the data and render the card component
//this how e dont have to fetch the data in every component addbooks function

////-------------------AXIOS CALL -------------------////

// const [book, setBook] = useState([]);

// // const getBooks = async () => {
// //   try {
// //     const response = await axios.get("http://localhost:5000/books");
// //     console.log(response.data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// //----or-----//

// // const getBooks = async () => {
// //   const response = await axios.get("http://localhost:5000/books");
// //   console.log(response);
// // };

// //----or-----//

// // const getBooks = async () => {
// //   const url = "http://localhost:3000/books";
// //   const response = await axios.get(url);
// //   setBook(response.data);
// //   // console.log(response.data);
// // };

// // useEffect(() => {
// //   getBooks();
// // }, []);

// // getBooks();//this will run infinitely because of the dependency array is empty and it will run on every render
