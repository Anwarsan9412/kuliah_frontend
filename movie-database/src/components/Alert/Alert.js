import styles from "./Alert.module.css";

const Alert = (props) => {
    const { children } = props;

  return (
    <div>
      <span>{children}</span>
    </div>
  )
}

export default Alert;