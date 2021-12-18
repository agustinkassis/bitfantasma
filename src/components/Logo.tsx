import styled from '@emotion/styled';
import logo from '../img/logo.png';

const H1 = styled('h1')({
  margin: 0,
  padding: '25px',
});

export const Logo = () => (
  <header className='App-header'>
    <H1>BitFantasma</H1>
    <img src={logo} className='App-logo' alt='logo' />
  </header>
);
