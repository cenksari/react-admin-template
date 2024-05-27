import React from 'react';

import { MemberContext, type IMember } from '../contexts/MemberContext';

import Storage from '../utils/Storage';

interface IProps {
  children: React.ReactNode;
}

export const MemberProvider = ({ children }: IProps): React.JSX.Element => {
  const [member, setMember] = React.useState<IMember | null>(
    Storage.getData('member') as IMember | null,
  );

  const addMember = (payload: IMember): void => {
    setMember(payload);

    Storage.setData('member', payload);
  };

  const removeMember = (): void => {
    setMember(null);

    Storage.removeData('member');
  };

  return (
    <MemberContext.Provider value={{ member, addMember, removeMember }}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberProvider;
