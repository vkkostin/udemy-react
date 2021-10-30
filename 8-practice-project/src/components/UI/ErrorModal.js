import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => <div className={styles.backdrop} onClick={props.onConfirm}></div>

const ModalOverlay = props => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop {...props} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}

export default ErrorModal;
