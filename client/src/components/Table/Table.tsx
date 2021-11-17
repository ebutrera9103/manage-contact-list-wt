import { CardBody, Table as TableReact, Card } from 'reactstrap';
import './style.css';
import { Contact } from '../../model/Contact';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RowAddCommon from './Common/RowAddCommon';
import RowEditCommon from './Common/RowEditCommon';
import { TypePropsRefreshWithItems } from './Types/Types'
toast.configure();

const Table = ({ items, refreshList }: TypePropsRefreshWithItems) => {

  return (
    <Card>
      <CardBody>
        <TableReact responsive>
          <tbody className='generic-table'>
            <RowAddCommon refreshList={refreshList} />
            <RowEditCommon items={items as Contact[]} refreshList={refreshList} />
          </tbody>
        </TableReact>
      </CardBody>

    </Card >
  );
};

Table.defaultProps = {
  items: [],
  refreshList: Function
};

export default Table;