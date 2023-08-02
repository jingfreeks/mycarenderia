import React from 'react';

import Textstyle from './styles';
import type {TextTypes} from './types';
const Texts = (props: TextTypes): React$Node => {
  const {TextMode = '', nativeProps, children, ...rest} = props;
  return (
    <>
      {React.createElement(
        Textstyle[TextMode || 'Text'],
        {...nativeProps, ...rest},
        children,
      )}
    </>
  );
};

export default Texts;
