import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native'

import {CardSection} from './common'
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
            onpress={()=> this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

export default connect(null, actions)(ListItem);