import { FaSearch } from "react-icons/fa";
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import { TypePropsChangehWithItemsSearched, TypeSearch } from '../Table/Types/Types';

const CreatableMulti = ({ items, onChangeSearch, itemsSearched }: TypePropsChangehWithItemsSearched) => {
    const handleChange = (
        newValue: OnChangeValue<TypeSearch, true>,
        actionMeta: ActionMeta<TypeSearch>
    ) => {
        onChangeSearch(newValue)
    };

    return (
        <>
            < CreatableSelect
                className="search"
                isSearchable
                placeholder={<FaSearch />}
                isMulti
                onChange={handleChange}
                options={itemsSearched}
            />
        </>
    );
}

export default CreatableMulti;

