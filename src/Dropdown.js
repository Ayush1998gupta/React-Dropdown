import { useState } from 'react';
import './styles.css';

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const buttonClickHandler = () => {
    setIsActive((prev) => !prev);
  };

  const optionHandler = (e) => {
    const selectedItem = e.target.textContent;
    props.setSelected(selectedItem);
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <div
        onClick={buttonClickHandler}
        className="dropdown-btn"
        value={props.selected}
        onMouseEnter={(e) => {
          setIsActive(true);
        }}
      >
        Choose Option
      </div>

      {isActive && (
        <div onClick={optionHandler} className="dropdown-content">
          {options.map((option) => (
            <div className="dropdown-item">{option}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
