import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/bookSearchEngine_SS.png';
import IMG2 from '../../assets/SocialNetworkAPI_SS.png';
import IMG3 from '../../assets/ECommerceBackend_SS.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Book Search Engine',
    repository: 'https://github.com/AlecDziwanowski/Book-Search-Engine',
    demo: 'https://book-search-engine-20220606.herokuapp.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Social Network API',
    repository: 'https://github.com/AlecDziwanowski/Social-Network-API',
    demo: 'https://drive.google.com/file/d/1UDUmv-ylrnEFxORbrN4SaKxSavzPX-Os/view',
  },
  {
    id: 3,
    image: IMG3,
    title: 'E-Commerce Backend',
    repository: 'https://github.com/AlecDziwanowski/E-Commerce-Backend',
    demo: 'https://drive.google.com/file/d/1XoUI0SEbfY81d4BTjqYhYeYGj_4gHcI2/view',
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My</h5>
      <h2>Recent Work</h2>
      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, repository, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={repository} target='_blank' rel='noreferrer' className='btn'>Repository</a>
                  <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;