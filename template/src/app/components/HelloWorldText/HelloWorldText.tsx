import React from 'react';

import { HelloWorldTextStyled } from './HelloWorldText.styles';

import { HelloWorldTextProps } from './HelloWorldText.types';

export const HelloWorldTextContainer = ({ label }: HelloWorldTextProps) => (
  <HelloWorldTextStyled>
    {label}
  </HelloWorldTextStyled>
);
