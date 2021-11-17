import { Box } from '@mui/material';
import Search from '../Search/Search';
import { styled } from '@mui/material/styles';
import { Contact } from '../../model/Contact';
import { TypePropsChangehWithItemsSearched } from '../Table/Types/Types'

const SearchWrapper = styled(Box)(
  () => `
  display: flex;
  justify-content: center;
  width:100%;
`
);

const Header = ({ items, onChangeSearch, itemsSearched }: TypePropsChangehWithItemsSearched) => {
  return (
    <header className="border-bottom" style={{ backgroundColor: 'black' }}>
      <SearchWrapper>
        <Search
          onChangeSearch={onChangeSearch}
          items={items as Array<Contact>}
          itemsSearched={itemsSearched}
        />
      </SearchWrapper>
    </header>
  );
}

export default Header;