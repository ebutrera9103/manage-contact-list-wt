import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import './styles.css'
import CreatableMulti from '../MultiSelect/MultiSelect';
import { TypePropsChangehWithItemsSearched } from '../Table/Types/Types';


const FormWrapper = styled(Box)(
  () => `
  padding: 35px;
  width: 100%;
`
);

const Search = ({ items, onChangeSearch, itemsSearched }: TypePropsChangehWithItemsSearched) => {
  return (
    <FormWrapper>
      <CreatableMulti
        onChangeSearch={onChangeSearch}
        items={items as any[]}
        itemsSearched={itemsSearched}
      />
    </FormWrapper>
  );
}

export default Search;