import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export interface ITodo {
    title: string;
    desc: string;
    checked: boolean;
}

interface Props {
    title: string;
    desc: string;
    dex: number;
    deleteTodo: (key: number) => void;
    checked: boolean;
    check: (key: number) => void;
}

const Todo: FC<Props> = ({ title, desc, dex, deleteTodo, check, checked }) => {
    return (
        <View style={styles.card}>
            <Card>
                <Card.Title h4 style={{ ...styles.text, textDecorationLine: checked ? 'line-through' : 'none', textDecorationStyle: 'solid', color: checked ? '#8f8f8f' : 'black' }}>{title}</Card.Title>
                <Card.Divider />
                <Text style={{ ...styles.text, textDecorationLine: checked ? 'line-through' : 'none', textDecorationStyle: 'solid', color: checked ? '#8f8f8f' : 'black' }}>{desc}</Text>
                <Card.Divider />
                <View style={styles.container}>
                    <View style={styles.btn} >
                        <Button
                            onPress={() => check(dex)}
                            type='clear'
                            icon={
                                <Icon name='check' size={20} color='green' />
                            }>
                        </Button>
                    </View>
                    <View style={styles.btn} >
                        <Button
                            // onPress={() => check(dex)}
                            type='clear'
                            icon={
                                <Icon name='edit' size={20} color='#fbbc04' />
                            }>
                        </Button>
                    </View>
                    <View style={styles.btn} >
                        <Button
                            onPress={() => deleteTodo(dex)}
                            type='clear'
                            icon={
                                <Icon name='trash' size={20} color='#e16259' />
                            }>
                        </Button>
                    </View>
                </View>
            </Card>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
        // backgroundColor: 'red'
    },
    btn: {
        width: "33.33%",
    }
})

export default Todo;