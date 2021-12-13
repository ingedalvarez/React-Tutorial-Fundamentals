import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

// VARS
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81255VTWssL._AC_UY218_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/91nNDY7u-+L._AC_UY218_.jpg',
    title: 'The Guardians: A Novel',
    author: 'John Grisham, Michael Beck, et ál.',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg',
    title: 'American Marxism',
    author: 'Mark R. Levin',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
  const clickHandler = () => {
    alert('hello world');
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Ejemplo
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
