import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setPosts(data.products || []);
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="uzum">
          <img src="./public/image.png" alt="" /> <h3>uzum market</h3>
        </div>
        <button className="btn">KATALOG</button>
        <input
          className="inp"
          type="text"
          placeholder="   Искать товары и категории"
        />
      </div>
      <div className="header">
        <h3>Электроника</h3>
        <h3>Бытовая техника</h3>
        <h3>Одежда</h3>
        <h3>Обувь</h3>
        <h3>Аксессуары </h3>
        <h3>Здоровье</h3>
        <h3></h3>
      </div>
      <div className="container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <img src={post.thumbnail} alt={post.name} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Discount: {post.discountPercentage}%</p>
            <div className="flex">
              <h5>category: "{post.category}"</h5>
              <h4>{post.price}$ </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
