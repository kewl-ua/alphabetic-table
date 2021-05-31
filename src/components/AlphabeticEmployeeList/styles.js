import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridGap: 20,
    listStyle: 'none',
    padding: 0,
  },
});

export default useStyles;
