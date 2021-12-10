import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

// VARS
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81255VTWssL._AC_UY218_.jpg',
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/91nNDY7u-+L._AC_UY218_.jpg',
  title: 'The Guardians: A Novel',
  author: 'John Grisham, Michael Beck, et ál.',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
