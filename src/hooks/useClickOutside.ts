import React, { RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, onClickOutside: () => void): void => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current != null && ref.current.contains(event.target as Node) === false) {
        onClickOutside();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
