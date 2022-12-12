import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const TopNews = () => {
    const [news,setNews] = useState([])
    const articles = news.slice(0,20);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-10-26&sortBy=publishedAt&apiKey=13003a8ff37a4f158736a25c94bb549f'
        fetch(url)
           .then(res => res.json())
           .then(data => setNews(data.articles))
    },[])
    return (
        <div>
            <h2>Top Headlines: {articles.length}</h2>
            {
                articles.map(article => <Header news = {article}></Header>)
            }
        </div>
    );
};

export default TopNews;