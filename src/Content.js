import React from 'react';
import { ItemList } from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
 return (
    <>
      <ItemList
      key={items.id}
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
    </>

  )
}

export default Content