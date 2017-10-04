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

    renderDescription() {
        const {selectedLibraryId, library} = this.props;
        if (selectedLibraryId === library.id) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        const shouldExpand = true;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
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

const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}

export default connect(mapStateToProps, actions)(ListItem);