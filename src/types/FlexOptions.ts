export interface FlexContainerOptions {
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems: 'stretch' | ' flex-start' | 'center' | 'flex-end' | 'baseline';
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap: number
}
