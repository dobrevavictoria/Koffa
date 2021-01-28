import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import { Home, EmojiObjects, FindReplace, Room } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  navigation: {
    bottom: 0,
    left: 0,
    position: "fixed",
    width: "100%"
  }
}));

function BottomBar(props) {
  const { history, location } = props;

  const classes = useStyles();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  }

  return (
    <BottomNavigation
      className={classes.navigation}
      showLabels
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction label="Home" value="/" icon={<Home />} />
      <BottomNavigationAction label="Reuse" value="/reuse" icon={<FindReplace />} />
      <BottomNavigationAction label="Reduce" value="/reduce" icon={<EmojiObjects />} />
      <BottomNavigationAction label="Recycle" value="/recycle" icon={<Room />} />
    </BottomNavigation>
  )
}

export default withRouter(BottomBar);
