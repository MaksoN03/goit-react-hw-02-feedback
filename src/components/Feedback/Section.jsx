import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    title: PropTypes.string.isRequired,
};