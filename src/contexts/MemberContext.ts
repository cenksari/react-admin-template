import React from 'react';

export interface IMember {
  id: number;
  name: string;
  email: string;
  token: string;
  picture: string;
  lastname: string;
}

export interface IMemberContext {
  member: IMember | null;
  addMember: (member: IMember) => void;
  removeMember: () => void;
}

export const MemberContext = React.createContext<IMemberContext | null>(null);
