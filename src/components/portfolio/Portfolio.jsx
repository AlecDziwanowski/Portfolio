import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/bookSearchEngine_SS.png';
import IMG2 from '../../assets/SocialNetworkAPI_SS.png';
import IMG3 from '../../assets/ECommerceBackend_SS.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My</h5>
      <h2>Recent Work</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='Book Search Engine' />
          </div>
          <h3>Book Search Engine</h3>
          <a href='https://github.com/AlecDziwanowski/Book-Search-Engine' target='_blank' ClassName='btn'>Github Repo</a>
          <a href='https://book-search-engine-20220606.herokuapp.com' target='_blank' ClassName='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='Book Search Engine' />
          </div>
          <h3>Book Search Engine</h3>
          <a href='https://github.com/AlecDziwanowski/Book-Search-Engine' target='_blank' ClassName='btn'>Github Repo</a>
          <a href='https://book-search-engine-20220606.herokuapp.com' target='_blank' ClassName='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='Book Search Engine' />
          </div>
          <h3>Book Search Engine</h3>
          <a href='https://github.com/AlecDziwanowski/Book-Search-Engine' target='_blank' ClassName='btn'>Github Repo</a>
          <a href='https://book-search-engine-20220606.herokuapp.com' target='_blank' ClassName='btn btn-primary'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio;