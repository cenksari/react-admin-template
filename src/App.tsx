import React from 'react';

import Navigation from './navigation/Navigation';

import MemberProvider from './providers/MemberProvider';

const App = (): React.JSX.Element => (
  <MemberProvider>
    <Navigation />
  </MemberProvider>
);

export default App;
