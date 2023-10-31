import { useEffect, useState} from 'react';
import "./styles/Blogs.css";
function NodeBlogs() {
  let [Cards, setCards] = useState([]);
  const dataFetch = async (url) => {
    try {
      const response = await fetch(url);
      const res_json = await response.json();
      setCards(res_json);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }
  useEffect(()=>{
    dataFetch('http://localhost:5050/cards');
  },[]);
  return (
    <main className="main">
      <h1 className="title">211410146 -- Marx Wang</h1>
      <div className="blogs--box">
        {Cards.map((card)=>{
          return (
            <article className="blog" key={card.title} >
              <img
                src={card.img}
                alt={card.title}
                className='blog-img'
              />
              <span className='blog-category'>{card.categories}</span>
              <h1 className='blog-title'>{card.title}</h1>
              <p className='blog-content'>{card.content}</p>
              <button className='blog-btn'>read more</button>
            </article>
          )
        })}
      </div>
    </main>
  );
}
export default NodeBlogs;