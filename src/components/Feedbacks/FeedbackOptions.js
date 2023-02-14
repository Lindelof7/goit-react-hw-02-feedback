import PropTypes from 'prop-types'
import nextId from "react-id-generator";
import React from 'react';
import css from './Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={(css.btnWrap)}>
            {options.map(option => {
                return (
                    <button
                        onClick={() => onLeaveFeedback(option)}
                        key={nextId()}
                        className={(css.btnOptions)}
                        type="button"
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};