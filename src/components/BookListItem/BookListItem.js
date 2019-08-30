import React, {Fragment} from 'react';

const BookListItem = ({book}) => {

    const {title, author} = book;

  return(
      <Fragment>
          <span className='title'>{title}</span>
          <span className='author'>{author}</span>
      </Fragment>
  )
};

export default BookListItem;