import { Stack, styled } from '@mui/material';
import MaterialContainer from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { db } from '../libs/firebase';
import { TweetWrapper } from './TweetWrapper';

const Container = styled(MaterialContainer)({
  minHeight: '90vh',
});

const List = styled(Stack)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
});

const generateList = (tweets: any[]) => {
  return tweets.map((tweet: any) => {
    return tweet.transaction ? (
      <TweetWrapper key={tweet.id} tweet={tweet} />
    ) : (
      ''
    );
  });
};

export const TweetsList = (props: any) => {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    db.collection('tweets')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const res = snapshot.docs.map((doc: any) => doc.data());
        setTweets(res);
      });
  }, []);
  return (
    <Container>
      <h2>Últimas Fantasmeadas</h2>
      <List spacing={2}>{generateList(tweets)}</List>
    </Container>
  );
};
