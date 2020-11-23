import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Divider, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Center from './Center';
import { ITodo } from './Todo';

interface FormProps {
    addTodo: (todo: ITodo) => void;
}

const Form: FC<FormProps> = ({ addTodo }) => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const onPress = () => {
        if (title.length && desc.length) {
            addTodo({ title, desc, checked: false });
            setTitle('');
            setDesc('');
        }
    };

    return (
        <Center>
            <Card>
                <Text h3 style={styles.heading}>
                    Add a task
                </Text>
                <Divider style={styles.divider} />
                <View style={styles.container}>
                    <Input
                        style={{ width: '100%' }}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Input
                        value={desc}
                        onChangeText={setDesc}
                        placeholder="Description"
                    />
                    <Button
                        icon={<Icon name="plus" size={22.5} color="white" />}
                        onPress={onPress}
                    />
                </View>
            </Card>
        </Center>
    );
};

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
    },
    divider: {
        marginTop: 20,
    },
    container: {
        marginTop: 20,
    },
});

export default Form;
