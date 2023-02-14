
import PropTypes from 'prop-types'
import { Component } from "react"


export class Statistics extends Component {
    render() {
        return (<div >
            <p>
                Good: {this.props.good}
            </p>
            <p>
                Neutral: {this.props.neutral}
            </p>
            <p>
                Bad:   {this.props.bad}
            </p>
            <p>
                Total:   {this.props.total}
            </p>
            <p>
                Positive Feedback:  {this.props.positive}%
            </p>
        </div >
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
};