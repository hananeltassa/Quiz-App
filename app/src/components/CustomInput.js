import * as React from 'react';
import { useInput } from '@mui/base/useInput';
import { styled } from '@mui/system';
import { unstable_useForkRef as useForkRef } from '@mui/utils';

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props);
  const inputProps = getInputProps();
  
  inputProps.ref = useForkRef(inputProps.ref, ref);
  
  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...inputProps} />
    </div>
  );
});

const StyledInputElement = styled('input')(
  ({ theme }) => `
    width: 400px;
    margin:10px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 10px 15px;
    border-radius: 30px;
    color: ${theme.palette.mode === 'dark' ? '#B0B8C4' : '#434D5B'};
    background: ${theme.palette.mode === 'dark' ? '#303740' : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#B0B8C4'};
    box-shadow: 0 2px 5px ${theme.palette.mode === 'dark' ? '#1C2025' : '#F3F6F9'};
    transition: all 0.3s ease;

    &:hover {
      border-color: #ff4081; /* Vibrant pink on hover */
      box-shadow: 0 0 5px #ff4081; /* Glow effect on hover */
    }

    &:focus {
      border-color: #673ab7; /* Purple border on focus */
      box-shadow: 0 0 0 3px #673ab7; /* Purple glow effect */
    }

    /* Firefox */
    &:focus-visible {
      outline: 0;
    }
  `
);

export default CustomInput;
