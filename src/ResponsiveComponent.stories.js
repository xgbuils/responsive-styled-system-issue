import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';

export default { title: 'ResponsiveComponent' };

export const example = () => (
  <ResponsiveComponent 
    p={[0, 1, 2]}
    color={['primary', 'neutrals.1', 'secondary']}
  >
    Colored & padding breakpoints
  </ResponsiveComponent>
);
