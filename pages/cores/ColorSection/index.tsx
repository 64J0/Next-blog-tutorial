import { useState, useEffect, useRef, useCallback } from "react";
import { invert } from "polished";

import styles from "./styles.module.scss";

const ColorSection: React.FC = () => {
  const liElement = useRef<HTMLLIElement>(null);
  const pElement = useRef<HTMLParagraphElement>(null);
  const inputElement = useRef<HTMLInputElement>(null);
  
  const [pickedColor, setPickedColor] = useState("#000000");

  const handleBtnClick = useCallback(() => {
    inputElement.current && inputElement.current.click();
  }, [inputElement.current]);

  useEffect(() => {
    if (liElement.current && pElement.current) {
      liElement.current.style.backgroundColor = pickedColor;
      pElement.current.style.color = invert(pickedColor);
    }
  }, [liElement.current, pickedColor, pElement.current]);

  return (
    <li ref={liElement} className={styles['color-section']}>
      <button
        type="button"
        className={styles['color-section__button']}
        onClick={handleBtnClick}
      >
        <p ref={pElement} className={styles['color-section__text']}>
          {pickedColor}
        </p>
        <input
          className={styles['color-section__picker']}
          type="color"
          name="colorPicker"
          onChange={(e) => setPickedColor(e.target.value)}
          value={pickedColor}
          ref={inputElement}
        />
      </button>
    </li>
  );
}

export default ColorSection;