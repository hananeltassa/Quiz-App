import * as React from "react";
import { useInput } from "@mui/base/useInput";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props);
  const inputProps = getInputProps();

  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <InputWrapper>
      <div {...getRootProps()}>
        <StyledInputElement {...props} {...inputProps} />
      </div>
    </InputWrapper>
  );
});

const InputWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 100%;
    max-width: 300px;
    padding: 10px 15px;
    border-radius: 30px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? '#B0B8C4' : '#434D5B'};
    background: ${theme.palette.mode === 'dark' ? '#303740' : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#B0B8C4'};
    transition: all 0.3s ease;

    &:hover {
      border-color: #ff4081;
      box-shadow: 0 0 5px #ff4081;
    }

    &:focus {
      border-color: #ff4081;
      box-shadow: 0 0 0 3px #ff4081;
    }

    &:focus-visible {
      outline: 0;
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
      padding: 8px 12px;
      border-radius: 20px;
      max-width: 90%;
    }

    @media (max-width: 400px) {
      font-size: 0.85rem;
      padding: 6px 10px;
      border-radius: 15px;
      max-width: 100%;
    }
  `
);

export default CustomInput;
