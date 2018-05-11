import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';

class Preview extends Component {

    render(){
        let style = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: '#3E3E3E',
            zIndex: 3,
        };
        return (
            <div style={style}>
                <Product />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    preview: state.preview.isPreview
});

export default connect(mapStateToProps, null)(Preview);