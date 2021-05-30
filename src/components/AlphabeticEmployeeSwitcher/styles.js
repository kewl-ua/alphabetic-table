import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    border: 0,
    padding: 0,
    margin: 0,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    '& + &': {
      marginTop: 30
    }
  },
  legend: {
    display: 'table',
    float: 'left',
    margin: 0,
    padding: 0,
    fontWeight: 600,
    width: '100%',
    '& + *': {
      clear: 'both'
    }
  },
  legendActive: {
    color: '#00f'
  },
  label: {
    width: '1em',
    height: '1em',
    display: 'inline-block',
    border: '1px solid',
    borderRadius: '50%'
  },
  labelText: {
    marginLeft: 5
  },
  inputWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    display: 'none',
    '&:checked + label': {
      backgroundColor: '#000000',
      boxShadow: 'inset 0 0 0 2px #ffffff'
    } 
  }
});

export default useStyles;
