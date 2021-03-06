import React from 'react';
import PropTypes from 'prop-types';

import '../modal.css';

const ContactModal = ({ children, customClass, show, closeCallback }) => (
    <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none' }}>
        <div className="overlay" onClick={closeCallback}></div>
        <div className="modal_content">
            {children}
            <button title="Close" className="close_modal" onClick={closeCallback}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    </div>
);

ContactModal.propTypes = {
    children: PropTypes.element,
    customClass: PropTypes.string,
    show: PropTypes.bool,
    closeCallback: PropTypes.func,
};

ContactModal.defaultProps = {
    children: <div>Empty Modal</div>,
    customClass: '',
    show: false,
    closeCallback: () => (false)
};

export default ContactModal;