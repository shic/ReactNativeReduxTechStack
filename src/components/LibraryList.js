import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    FlatList,
    Text
} from 'react-native';

class LibraryList extends Component{

    componentWillMount(){

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

    _renderItem = ({item}) => (
        <Text>{item.title}</Text>
    );

    render() {
        console.log(this.props);

        return(
            <FlatList
                data={this.props.libraries}
                renderItem={this._renderItem}
            />
        )
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return{
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList);