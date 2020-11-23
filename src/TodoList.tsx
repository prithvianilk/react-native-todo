import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import Center from './Center';
import Todo, { ITodo } from './Todo';

interface Props {
    list: ITodo[];
    deleteTodo: (key: number) => void;
    check: (key: number) => void;
}

const EmptyView = () => (
    <Center>
        <Text h4 style={styles.empty}>
            No active tasks
        </Text>
    </Center>
);

const TodoList: FC<Props> = ({ list, deleteTodo, check }) => {
    return (
        <>
            <View style={styles.headingContainer}>
                <Divider />
                <Text h3 style={styles.heading}>
                    Tasks
                </Text>
            </View>
            <Divider />
            {list.length === 0 ? (
                <EmptyView />
            ) : (
                <ScrollView>
                    <View>
                        {list.map(({ title, desc, checked }, key) => (
                            <Todo
                                title={title}
                                desc={desc}
                                checked={checked}
                                key={key}
                                dex={key}
                                deleteTodo={deleteTodo}
                                check={check}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    empty: {
        textAlign: 'center',
    },
    headingContainer: {
        marginTop: 'auto',
        marginBottom: 20,
    },
    heading: {
        textAlign: 'center',
        marginTop: 15,
    },
});

export default TodoList;
