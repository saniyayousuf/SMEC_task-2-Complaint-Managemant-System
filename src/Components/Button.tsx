import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type btntype = {
  label: string,
  variant?: string,
  onClick ?: any,
  type?:string,



}


export default function BAButton(props: btntype) {
  const { onClick, variant, label } = props;
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClick}
        variant={"contained"}

      >
        {label}
      </Button>

    </Stack>
  );
}