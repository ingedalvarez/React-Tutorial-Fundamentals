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
      <Book job="developer" salary={10} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
