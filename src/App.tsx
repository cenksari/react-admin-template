import React from 'react';

import MemberProvider from './providers/MemberProvider';

import Navigation from './navigation/Navigation';

const App = (): React.JSX.Element => (
  <MemberProvider>
    <Navigation />
  </MemberProvider>
);

export default App;
