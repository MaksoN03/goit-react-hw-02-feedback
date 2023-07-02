import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return <span>{message}</span>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};