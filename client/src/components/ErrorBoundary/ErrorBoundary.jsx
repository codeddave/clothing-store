import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};


class ErrorBoundary extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div></div>;
    }
}

ErrorBoundary.propTypes = propTypes;
ErrorBoundary.defaultProps = defaultProps;

export default ErrorBoundary;