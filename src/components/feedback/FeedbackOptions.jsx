import React from 'react';
import css from './buttons.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) =>
  options.map(option => (
    <button
      className={css.btn}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));