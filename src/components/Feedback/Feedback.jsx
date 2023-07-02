import { FeedbackOption } from "./FeedbackOption";
import PropTypes from 'prop-types';

export const Feedback = ({ onLeaveFeedback }) => {
    return (
        <div>
            <FeedbackOption onLeaveFeedback={onLeaveFeedback} />
        </div>
    );
};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};