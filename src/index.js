import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

// VARS
const img = 'https://m.media-amazon.com/images/I/81255VTWssL._AC_UY218_.jpg';
const title = 'Where the Crawdads Sing';
const author = 'Delia Owens';

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src={img} alt={title} />;
};

const Title = () => {
  return <h1>{title}</h1>;
};

const Author = () => {
  return <h4>{author}</h4>;
};

ReactDom.render(<BookList />, document.getElementById('root'));
