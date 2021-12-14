import React from 'react';

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

export default Book;
