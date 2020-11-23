import { SearchBar } from 'react-native-elements';
import React, { FC } from 'react'

interface Props {
    search: string;
    setSearch: (search: string) => void;
}

const Search: FC<Props> = ({ search, setSearch }) => {
    return (
        <SearchBar
            lightTheme
            placeholder="Add a new todo..."
            placeholderTextColor='black'
            selectionColor="black"
            inputStyle={{ color: "black" }}
            onChangeText={setSearch}
            value={search}
        />
    )
}

export default Search;