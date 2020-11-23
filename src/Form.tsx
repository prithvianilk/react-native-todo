import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Card, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ITodo } from './Todo';

interface Props {
    addTodo: (todo: ITodo) => void;
}

const Form: FC<Props> = ({ addTodo }) => {
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const onPress = () => {
        if (title.length && desc.length) {
            addTodo({ title, desc, checked: false });
            setTitle("");
            setDesc("");
        }
    };
    
    return (
        <Card>
            <Text h3 style={styles.heading}>Add a task</Text>
            <View style={styles.container}>
                <Input
                    placeholder='Title'
                    value={title}
                    onChangeText={setTitle}
                />
                <Input
                    value={desc}
                    onChangeText={setDesc}
                    placeholder='Description'
                />
                <Button
                    icon={
                        <Icon
                            name="plus"
                            size={22.5}
                            color="white"
                        />
                    }
                    onPress={onPress}
                />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center'
    },
    container: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25
    }
})

export default Form;