import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
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
  return (
    <img
      src="https://m.media-amazon.com/images/I/81255VTWssL._AC_UY218_.jpg"
      alt="Where the Crawdads Sing"
    />
  );
};

const Title = () => {
  return <h1>'Where the Crawdads Sing</h1>;
};

const Author = () => {
  return <h4>'Delia Owens </h4>;
};

ReactDom.render(<BookList />, document.getElementById('root'));
