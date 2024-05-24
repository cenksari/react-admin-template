import React from 'react';

const Menu = (): React.JSX.Element => {
  return (
    <div>
      <div className='header-menu flex flex-1 flex-v-center flex-space-between pointer no-select'>
        <span className='value'>Dashboard</span>
        <span className='material-symbols-outlined'>expand_all</span>
      </div>
    </div>
  );
};

export default Menu;
