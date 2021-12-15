import styled from '@emotion/styled';
import TweetEmbed from 'react-tweet-embed';

interface ITweetWrapperProps {
  tweet: any;
}

interface ITransactionProps {
  sats: Number;
  blueRate: Number;
  btcRate: Number;
  totalArs: Number;
}

const Container = styled('div')({
  margin: 'auto',
  minWidth: '90vw',
  display: 'flex',
  justifyContent: 'center',
});

const Transaction = ({
  sats,
  blueRate,
  btcRate,
  totalArs,
}: ITransactionProps) => {
  const Side = styled('div')({
    background: 'white',
    margin: '10px',
    borderRadius: '14px',
    border: '1px solid #ddd',
    textAlign: 'left',
    padding: '14px',
  });
  return (
    <Side>
      <div>
        <h3>Transaction</h3>
      </div>
      <div>Sats: {sats}</div>
      <div>USD/ARS: {blueRate}</div>
      <div>BTC/USD: {btcRate}</div>
      <div>
        <b>Valor: ARS {totalArs.toFixed(2)}</b>
      </div>
      <div>-----------</div>
      <div>Valor Actual: </div>
    </Side>
  );
};

export const TweetWrapper = ({ tweet }: ITweetWrapperProps) => (
  <Container>
    <TweetEmbed className='twitter_wrapper' id={tweet.id} />
    <Transaction {...tweet.transaction} />
  </Container>
);
