import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class PopularItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        console.log('item', item);
        if (!item || !item.owner) return null;
        return (
            <TouchableOpacity
                onPress={this.props.onSelect}
            >
               <View style={styles.cell_container}>
                   <Text style={styles.title}>{item.full_name}</Text>
                   <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text>Author:</Text>
                            <Image
                                style={styles.image}
                                source={{uri: item.owner.avatar_url}}
                            />
                        </View>
                        <View style={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
                            <Text>Start:</Text>
                            <Text>{item.stargazers_count}</Text>
                        </View>
                    </View>
               </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575',
    },
    avatar_wrap: {

    },
    image: {

        height: 22,
        width: 22
    }
});

