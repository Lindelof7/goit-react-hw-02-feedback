import React from 'react';
import PropTypes from 'prop-types'

export const Section = ({ title }) => {
    return (
        <p>{title}</p>
    )
}

Section.propTypes = {
    message: PropTypes.string
}