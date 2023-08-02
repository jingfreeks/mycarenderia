export type textmode =
  | 'Text'
  | 'Title'
  | 'Label'
  | 'Error'
  | 'LightText'
  | 'H1Text'
  | 'H2Text'
  | 'H3Text'
  | 'LightGrayText'
  | 'NormalGrayText';

export type TextTypes = {
  TextMode?: textmode;
  nativeProps?: object;
  children?: ReactNode;
};
