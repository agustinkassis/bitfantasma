import styled from '@emotion/styled';
import TweetEmbed from 'react-tweet-embed';
import NumberFormat from 'react-number-format';
import { RateContext } from '../contexts/RateContext';
import { useContext } from 'react';

interface ITweetWrapperProps {
  tweet: any;
}

interface ITransactionProps {
  sats: number;
  blueRate: number;
  btcRate: number;
  totalArs: number;
}

const Container = styled('div')({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 15,
});

const Side = styled('div')({
  background: 'white',
  margin: '10px',
  borderRadius: '14px',
  border: '1px solid #ddd',
  textAlign: 'left',
  padding: '4px 10px 8px 10px ',
  minWidth: '160px',
});

const Title = styled('h3')({
  fontSize: '12px',
  borderBottom: '1px solid #eee',
  paddingBottom: '4px',
  marginBottom: '8x 0px 4px 0px',
});

const Percentage = styled('div')({
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'right',
  color: 'green',
});

const Transaction = ({
  sats,
  blueRate,
  btcRate,
  totalArs,
}: ITransactionProps) => {
  const { btcArs } = useContext(RateContext);
  const currentArs = (sats * btcArs) / 100000000;
  const gain = currentArs / totalArs - 1;
  return (
    <Side>
      <div>
        <Title>Transacción</Title>
      </div>
      <div>
        <b>
          <NumberFormat
            value={totalArs.toFixed(0)}
            prefix='ARS '
            thousandSeparator='.'
            decimalSeparator=','
            displayType='text'
          />
        </b>
      </div>
      <div>
        <NumberFormat
          value={sats.toFixed()}
          suffix=' sats'
          thousandSeparator='.'
          decimalSeparator=','
          displayType='text'
        />
      </div>
      <div>
        USD/ARS:{' '}
        <NumberFormat
          value={blueRate.toString().replace('.', ',')}
          thousandSeparator='.'
          decimalSeparator=','
          displayType='text'
        />
      </div>
      <div>
        BTC/USD:{' '}
        <NumberFormat
          value={btcRate.toFixed()}
          thousandSeparator='.'
          decimalSeparator=','
          displayType='text'
        />
      </div>

      <Title>Valor Actual</Title>
      <div>
        <b>
          ARS{' '}
          <NumberFormat
            value={currentArs.toFixed().replace('.', ',')}
            thousandSeparator='.'
            decimalSeparator=','
            decimalScale={2}
            displayType='text'
          />
        </b>
      </div>
      <Percentage>
        <NumberFormat
          value={gain.toFixed(2).replace('.', ',')}
          prefix={gain > 0 ? '+' : ''}
          suffix='%'
          thousandSeparator='.'
          decimalSeparator=','
          displayType='text'
        />
      </Percentage>
    </Side>
  );
};

export const TweetWrapper = ({ tweet }: ITweetWrapperProps) => (
  <Container>
    <TweetEmbed className='twitter_wrapper' id={tweet.id} />
    <Transaction {...tweet.transaction} />
  </Container>
);
