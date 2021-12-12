import { styled } from '@mui/material';
import MaterialContainer from '@mui/material/Container';

const Container = styled(MaterialContainer)({
  minHeight: '90vh',
});

export const Body = (props: any) => <Container>{props.children}</Container>;
