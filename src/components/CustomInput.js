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
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? '#B0B8C4' : '#434D5B'};
    background: ${theme.palette.mode === 'dark' ? '#303740' : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#B0B8C4'};
    box-shadow: 0 2px 2px ${theme.palette.mode === 'dark' ? '#1C2025' : '#F3F6F9'};

    &:hover {
      border-color: #3399FF; /* blue color on hover */
    }

    &:focus {
      border-color: #3399FF;
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? '#0072E5' : '#80BFFF'};
    }

    /* Firefox */
    &:focus-visible {
      outline: 0;
    }
  `
);

export default CustomInput;