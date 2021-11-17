import {
  Container,
  Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './style.css'
import Header from '../../../components/Header/Header';
import Table from '../../../components/Table/Table';
import { Contact } from '../../../model/Contact';
import { get, getSearch } from '../../../services';
import { CONSTANTS } from '../../../config/constants';
import { TypeSearch } from '../../../components/Table/Types/Types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


export const Home: React.FC = () => {

  //Resources
  const [items, setItems] = useState([]);
  const [itemsToSearch, setItemsToSearch] = useState(['']);
  const [itemsSearched, setItemsSearched] = useState([] as Array<TypeSearch>);




  useEffect(() => {
    retrieveContacts()
    retrieveSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const retrieveContacts = () => {
    const res = get('contacts');
    res.then(result => {
      if (result?.status === 200) {
        setItems(result.data);
        prepareDataToSearch(result.data)
      } else {
        toast.error(CONSTANTS.ERROR_RETRIEVED, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    })
  }

  const retrieveSearch = () => {
    const res = get('search');
    res.then(result => {
      if (result?.status === 200) {
        let itemSearch: Array<TypeSearch> = [];
        result.data.forEach((item: any) => {
          itemSearch.push({ value: item.search, label: item.search })
        })
        const filtered = deleteRepetedElements(itemSearch)
        setItemsSearched(filtered);
        prepareDataToSearch(result.data)
      } else {
        toast.error(CONSTANTS.ERROR_RETRIEVED, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    })
  }

  const deleteRepetedElements = (array: Array<TypeSearch>) => {
    const values = array.map(item => item.value)
    return array.filter(({ value }, index) => !values.includes(value, index + 1))
  }


  const prepareDataToSearch = (data: any[]) => {
    let arrayData: any[] = []
    data.forEach((element: any) => {
      return arrayData.push({ value: `${element.name} ${element.address} ${element.phone} ${element.email}`, label: `${element.name} ${element.address} ${element.phone} ${element.email}` });
    });
    setItemsToSearch(arrayData)
  }

  const onChangeSearch = (searchCriteria: any) => {
    if (searchCriteria.length !== 0) {
      let values: string[] = [];
      searchCriteria.forEach((element: any) => {
        values.push(element.value)
      });

      const res = getSearch(values, 'filtered-contact');
      res.then(result => {
        if (result?.status === 200) {
          setItems(result.data);
        } else {
          toast.error(CONSTANTS.ERROR_RETRIEVED, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      })
    } else {
      refreshList();
    }
  }

  const refreshList = () => {
    retrieveContacts();
    retrieveSearch();
  }

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid item md={12} lg={12} mx="auto">
        <Header
          onChangeSearch={(searchCriteria: any) => { onChangeSearch(searchCriteria) }}
          items={itemsToSearch as any[]}
          itemsSearched={itemsSearched}
        />
        <div className='mt-5'>
          <Table
            items={items as Array<Contact>}
            refreshList={() => refreshList()}
          />
        </div>
      </Grid>
    </Container>
  );
}

export default Home;

