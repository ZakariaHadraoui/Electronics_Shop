// Cards.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Articles } from './articlesdata';

function Cards({ articles }) {
    const { title } = useParams();

    const filteredArticles = title
        ? articles.filter((article) => article.title === title)
        : articles;

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {filteredArticles.map((article) => (
                    <div key={article.id} className="card col-md-3 col-sm-6 text-center my-3 mx-2">
                        <h2>{article.title}</h2>
                        <img
                            className="img-fluid"
                            src={`/images/${article.img}`}
                            alt="Article Image"
                            style={{ maxWidth: '200px' }}
                        />
                        <p>{article.desc}</p>
                        <p>Price: {article.price}</p>
                        <button className="rounded my-2 mx-auto">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
