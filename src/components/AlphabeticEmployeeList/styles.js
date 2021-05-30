import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridColumnGap: 20,
    listStyle: 'none',
    padding: 0
  }
});

export default useStyles;
