import React from 'react';

import { MemberContext, type IMemberContext } from '../contexts/MemberContext';

const useMember = (): IMemberContext => {
  const { member, addMember, removeMember } = React.useContext(MemberContext) as IMemberContext;

  return { member, addMember, removeMember };
};

export default useMember;
