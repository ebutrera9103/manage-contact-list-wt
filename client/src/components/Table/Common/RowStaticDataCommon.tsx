import logo from '../../../assets/img/user.png';
import { TypePropsEditRemoveWithItems } from '../Types/Types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const RowEditCommon = ({ runEdit, items, onHandleRemove }: TypePropsEditRemoveWithItems) => {
    const { id, name, email, phone, address } = items;

    return (
        <>
            <td className='generic-table image'><img src={logo} width={'100%'} alt='Logo user' /></td>
            <td className="align-middle text-center">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr className='generic-table tr-title'><td>Name</td></tr>
                                        <tr><td>{name}</td></tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td className="align-middle text-center">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr className='generic-table tr-title'><td>Address</td></tr>
                                        <tr><td><b>{address}</b></td></tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td className="align-middle text-center">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr className='generic-table tr-title'><td>Phone</td></tr>
                                        <tr><td><b>{phone}</b></td></tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td className="align-middle text-center">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr className='generic-table tr-title'><td>Email</td></tr>
                                        <tr><td><b>{email}</b></td></tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>

            <td className="align-middle text-center">
                <span className='px-2 generic-table tag-a' onClick={() => runEdit({ id, name, email, phone, address })}>Edit</span>
                <span id='button-delete' className='px-2 generic-table tag-a' onClick={(e) => onHandleRemove(id, e)}>Remove</span>
            </td>
        </>
    );
}

export default RowEditCommon;