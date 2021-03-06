import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(.1),
    },
  },
  iconHover: {
    '&:hover': {
      color: green[500],
    },
  },
}));


export default function LogIn () {
  const account = useStyles();

  return (
    <div className={account.root}>
      <PersonIcon
        color="primary"
        fontSize="large"
        style={{fontSize:50}}
        component={svgProps => {
          return (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="30%" stopColor={blue[400]} />
                  <stop offset="70%" stopColor={blue[400]} />
                </linearGradient>
              </defs>
              {React.cloneElement(svgProps.children[0], {
                fill: 'url(#gradient1)',
              })}
            </svg>
          );
        }}
      />
    </div>
  );
}