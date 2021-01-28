import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    overflowX: 'auto',
    padding: theme.spacing(10, 0, 2),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "inherit",
    noWrap: true
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <Toolbar className={classes.toolbar}>
      {sections.map((section) => (
        <Link className={classes.toolbarLink}
          key={section.title}
          href={section.url}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  );
}
