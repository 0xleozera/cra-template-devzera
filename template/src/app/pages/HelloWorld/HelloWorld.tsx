import React from 'react';

import { HelloWorldText } from 'app/components';

import { HelloWorldContainer } from './HelloWorld.styles';

const HelloWorld = () => (
  <HelloWorldContainer>
    <HelloWorldText label="Hello World" />
  </HelloWorldContainer>
);

export default HelloWorld;
