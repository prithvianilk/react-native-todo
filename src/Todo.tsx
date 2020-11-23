import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface Props {
    text: string;
    dex: number;
    deleteTodo: (key: number) => void;
    checked: boolean;
    check: (key: number) => void;
}

const Todo: FC<Props> = ({ text, dex, deleteTodo, check, checked }) => {
    return (
        <View style={styles.card}>
            <Card>
                
                <Card.Title h4 style={{ ...styles.desc, textDecorationLine: checked ? 'line-through' : 'none', textDecorationStyle: 'solid', color: checked ? '#8f8f8f' : 'black' }}>{text}</Card.Title>
                <Card.Divider />
                <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <View style={styles.btn} >
                        <Button
                            onPress={() => deleteTodo(dex)}
                            type='clear'
                            icon={
                                <Icon name='trash' size={20} color='#e16259' />
                            }>
                        </Button>
                    </View>
                    <View style={styles.btn} >
                        <Button
                            onPress={() => check(dex)}
                            type='clear'
                            icon={
                                <Icon name='check' size={20} color='green' />
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
    desc: {
        textAlign: 'center',
        marginBottom: 20
    },
    btn: {
        width: "50%",
    }
})

export default Todo;