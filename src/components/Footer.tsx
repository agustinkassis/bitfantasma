import { Link, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
const FooterComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'white',
  padding: 15,
  lineHeight: 2,
  marginTop: 20,
});

const GithubLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  alignItems: 'center',
  '&:hover': {
    color: 'blue',
  },
});

const GithubText = styled('span')({
  marginLeft: 4,
  fontWeight: 'bold',
});

const Love = styled(FavoriteIcon)({
  color: 'red',
});

export const Footer = (props: any) => (
  <FooterComponent>
    <div>
      Creado con amor. <Love />
    </div>
    <div>
      <GithubLink href='https://github.com' color='inherit'>
        <GitHubIcon />
        <GithubText> Github</GithubText>
      </GithubLink>
    </div>
  </FooterComponent>
);
