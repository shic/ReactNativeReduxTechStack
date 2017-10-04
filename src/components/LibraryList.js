import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {

    }

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item: library}) => (
        <ListItem
            library = {library}
            id={library.id}
            title={library.title}
        />

    );

    render() {
        console.log(this.props);

        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this._renderItem}
            />
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList);