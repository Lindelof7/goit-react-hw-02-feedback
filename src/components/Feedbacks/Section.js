import React from 'react';
import PropTypes from 'prop-types'
import css from './Feedback.module.css'

export const Section = ({ title }) => {
    return (
        <p className={(css.title)}>{title}</p>
    )
}

Section.propTypes = {
    message: PropTypes.string
}