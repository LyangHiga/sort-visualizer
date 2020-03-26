// TODO mobile
import sizes from './sizes';

const styles = theme => ({
  Navbar: {
    display: 'flex',
    alignItems: 'space-around',
    justifyContent: 'center',
    height: '6vh'
  },
  title: {
    display: 'none',
    [sizes.down('sm')]: {
      fontSize: '12px',
      display: 'block'
    }
  },
  button: {
    margin: '0 10px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '15px',
    [sizes.down('sm')]: {
      fontSize: '8px',
      margin: '0 1px',
      border: 'none',
      cursor: 'pointer'
    }
  }
});

export default styles;
