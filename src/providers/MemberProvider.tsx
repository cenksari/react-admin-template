import React from 'react';

import { MemberContext, type IMember } from '../contexts/MemberContext';

import useLocalStorage from '../hooks/useLocalStorage';

interface IProps {
  children: React.ReactNode;
}

const MemberProvider = ({ children }: IProps): React.JSX.Element => {
  const { getData, setData, removeData } = useLocalStorage();

  const [member, setMember] = React.useState<IMember | null>(getData('member') as IMember | null);

  const addMember = (payload: IMember): void => {
    setMember(payload);

    setData('member', payload);
  };

  const removeMember = (): void => {
    setMember(null);

    removeData('member');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValues = React.useMemo(() => ({ member, addMember, removeMember }), []);

  return <MemberContext.Provider value={contextValues}>{children}</MemberContext.Provider>;
};

export default MemberProvider;
