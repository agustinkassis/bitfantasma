import { Link, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'white',
  padding: 15,
  lineHeight: 2,
  marginTop: 2,
});

const GithubLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  alignItems: 'center',
});

const GithubText = styled('span')({
  marginLeft: 4,
  fontWeight: 'bold',
});

export const Footer = (props: any) => (
  <FooterComponent>
    <div>Creado con mucho amor.</div>
    <div>
      <GithubLink href='https://github.com' color='inherit'>
        <GitHubIcon />
        <GithubText> Github</GithubText>
      </GithubLink>
    </div>
  </FooterComponent>
);
