import React from 'react';

interface IProps {
  name: string,
  id: string
}

const CategoryItem = ({name}: IProps) => {
  return (
    <div className='w-24 h-24 bg-white rounded-2xl shrink-0'>
      {name}
    </div>
  );
}

export default CategoryItem;
