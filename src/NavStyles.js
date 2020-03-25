const styles = theme => ({
  Navbar: {
    display: 'flex',
    alignItems: 'space-around',
    justifyContent: 'center',
    height: '6vh'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  button: {
    margin: '0 10px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '15px'
  }
});

export default styles;
