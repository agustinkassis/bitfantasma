import { Stack, styled } from '@mui/material';
import MaterialContainer from '@mui/material/Container';
import { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';
import { db } from '../libs/firebase';

const Container = styled(MaterialContainer)({
  minHeight: '90vh',
});

const Tweet = styled('div')({
  margin: 'auto',
  minWidth: '90vw',
});

const List = styled(Stack)({
  display: 'flex',
  justifyContent: 'center',
});

const generateList = (tweets: any[]) => {
  return tweets.map((tweet: any) => (
    <Tweet>
      <TweetEmbed className='twitter_wrapper' id={tweet.id} />
    </Tweet>
  ));
};

export const TweetsList = (props: any) => {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    db.collection('tweets').onSnapshot((snapshot) => {
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
