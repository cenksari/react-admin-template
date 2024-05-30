import React from 'react';

import { MemberContext, type IMember } from '../contexts/MemberContext';

import useLocalStorage from '../hooks/useLocalStorage';

interface IProps {
  children: React.ReactNode;
}

export const MemberProvider = ({ children }: IProps): React.JSX.Element => {
  const { getData, setData, removeData } = useLocalStorage();

  const [member, setMember] = React.useState<IMember | null>(null);

  React.useEffect(() => {
    setMember(getData('member') as IMember | null);
  }, [getData]);

  const addMember = React.useCallback((payload: IMember): void => {
    setMember(payload);

    setData('member', payload);
  }, [setData]);

  const removeMember = (): void => {
    setMember(null);

    removeData('member');
  };

  return (
    <MemberContext.Provider value={{ member, addMember, removeMember }}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberProvider;
