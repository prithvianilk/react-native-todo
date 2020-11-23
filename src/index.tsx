import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Todo from './Todo';
import Search from './SearchBar';

interface ITodo {
    text: string;
    checked: boolean;
}

const App: FC = () => {
    const [list, setList] = useState<ITodo[]>([]);
    const [search, setSearch] = useState<string>("");

    const onPress = () => {
        if (search.length) {
            setList([...list, { text: search, checked: false }]);
            setSearch("");
        }
    };

    const deleteTodo = (key: number) => setList([...list.filter((_, dex) => (dex !== key))]);

    const check = (key: number) => setList([...list.map((card, dex) => (dex === key ? { ...card, checked: !(card.checked) } : card))])

    return (
        <>
            <SafeAreaView style={styles.safeAreaView}>
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <ScrollView>
                    {list.length === 0 && (
                        <View style={{ marginTop: 'auto' }}>
                            <Text h3 style={{ textAlign: 'center', marginTop: 15 }}>No new tasks.</Text>
                        </View>
                    )}
                    {list.map(({ text, checked }, key) => <Todo text={text} checked={checked} key={key} dex={key} deleteTodo={deleteTodo} check={check} />)}
                </ScrollView>
            </SafeAreaView>
            <View>
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
        </>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    text: {
        textAlign: 'center',
    }
})

export default App;