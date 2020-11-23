import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Form from './Form';
import { ITodo } from './Todo';
import TodoList from './TodoList';

const App: FC = () => {
    const [list, setList] = useState<ITodo[]>([]);
    const [visible, setVisible] = useState<boolean>(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };


    const addTodo = (todo: ITodo) => setList([...list, todo]);
    const deleteTodo = (key: number) => setList([...list.filter((_, dex) => (dex !== key))]);
    const check = (key: number) => setList([...list.map((card, dex) => (dex === key ? { ...card, checked: !(card.checked) } : card))])

    return (
        <>
            <SafeAreaView style={styles.safeAreaView}>
                <TodoList
                    list={list}
                    deleteTodo={deleteTodo}
                    check={check}
                />
                <Button onPress={toggleOverlay} icon={<Icon name='plus' color='white' size={20} />} />
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay} fullScreen>
                    <Form
                        addTodo={addTodo}
                    />
                </Overlay>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    text: {
        textAlign: 'center',
    },
})

export default App;