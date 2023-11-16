import * as styles from "./ToggleSwitch.css";

interface PropType {
  handleShowMaterial: () => void;
}

export default function ToggleSwitch({ handleShowMaterial }: PropType) {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" className={styles.toggleSwitch} id="toggle" />
      <label
        htmlFor="toggle"
        className={styles.switchLabel}
        onClick={() => handleShowMaterial()}
      >
        <span className={styles.onOffBtn}></span>
      </label>
    </div>
  );
}
