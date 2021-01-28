import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import Post from './Post';
import TopBar from '../TopBar';
import BottomBar from '../BottomBar';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: 0,
    backgroundColor: theme.palette.background.default,
  },
  grid: {
    paddingBottom: theme.spacing(8),
  },
}));

const sections = [
  { title: 'Crafty Tips & Trics', url: '#' },
  { title: 'Reduce Waste', url: '#' },
  { title: 'Climate Crisis', url: '#' },
  { title: 'Pollution', url: '#' },
  { title: 'Transportation', url: '#' }
];

const featuredPost = {
  title: 'Renovate old furniture for less than an hour',
  description:
    "Need new furniture? Think twice! Check this article for some ideas how to give new life to your old household items.",
  image: require('../../images/renovate.jpg'),
  imgText: 'Renovated furniture',
  linkText: 'Continue reading…',
};

const posts = [
  {
    title: '38 Trash-to-Treasure Crafts That Will Save You So Much Money',
    date: 'Oct 23',
    description:
      'You can accomplish most of these simple upcycling ideas in a single afternoon.',
    image: require('../../images/ttt1.jpg'),
    imageText: 'Trash-to-treasure crafts',
  },
  {
    title: 'Creative Crafts For Old Crayons',
    date: 'Oct 24',
    description:
      'Do you have a lot of old, broken or unused crayons laying around? Give your old crayons new life with these Creative Crafts for Old Crayons!',
    image: require('../../images/crayons2.jpg'),
    imageText: 'Reuse old crayons',
  },
  {
    title: 'Refashion Old Clothes',
    date: 'Oct 25',
    description:
      'No need to hurry up to the mall in case you are searching for new clothes. Check this out for some ideas how to refashion your clothes.',
    image: require('../../images/cloth.jpg'),
    imageText: 'Refashioned Clothes',
  },
  {
    title: 'Home Decoration With 3 Materials',
    date: 'Oct 25',
    description:
      'More guidelines on how to get the maximum of old and unused items at home.',
    image: require('../../images/ttt4.jpg'),
    imageText: 'Home Decorations',
  },
];

export default function Reduce() {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      <div className={classes.main}>
        <CssBaseline />
        <Container>
          <Header sections={sections} />
          <div>
            <FeaturedPost post={featuredPost} />
            <Grid container spacing={2} className={classes.grid}>
              {posts.map(post =>
                <Post key={post.title} post={post} />
              )}
            </Grid>
          </div>
        </Container>
      </div>
      <BottomBar />
    </>
  );
}