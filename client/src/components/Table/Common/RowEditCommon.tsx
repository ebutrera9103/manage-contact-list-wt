import { ChangeEvent, MouseEvent, useState } from 'react';
import logo from '../../../assets/img/user.png';
import { nanoid } from 'nanoid';
import { Contact } from '../../../model/Contact';
import { del, put } from '../../../services'
import ConfirmDialogTek from "../../../components/ConfirmAlert/ConfirmDialogTek";
import { CONSTANTS } from '../../../config/constants';
import { TypePropsRefreshWithItems } from '../Types/Types'
import RowStaticDataCommon from './RowStaticDataCommon'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const RowEditCommon = ({ items, refreshList }: TypePropsRefreshWithItems) => {

    const [edit, setEdit] = useState(false);
    const [idItem, setId] = useState(0);
    const [nameContact, setNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [phoneContact, setPhoneContact] = useState(0);
    const [addressContact, setAddressContact] = useState('');
    const [focusField, setFocusField] = useState('');

    const runEdit = ({ id, name, email, phone, address }: Contact) => {
        setEdit(!edit);
        setId(id);
        setNameContact(name);
        setEmailContact(email);
        setPhoneContact(phone);
        setAddressContact(address);
    }
    const onHandleRemove = (id: number, e: MouseEvent) => {
        ConfirmDialogTek({
            title: `Delete`,
            message: `Are you sure that do you want DELETE this element?`,
            actions: [
                {
                    label: `Yes, I'm!`,
                    color: 'danger',
                    callback: (onClose: () => void) => {
                        onClose();
                        _onHandleRemove(id, e);
                    }
                },
                {
                    label: 'Cancel',
                    callback: (onClose: () => void) => {
                        onClose();
                    }
                }
            ]
        });
    };

    const _onHandleRemove = (id: number, e: MouseEvent) => {
        e.preventDefault();
        const res = del(id, 'contact');
        res.then((res: any) => {
            toast.success(CONSTANTS.DELETED, {
                position: toast.POSITION.TOP_RIGHT
            });
            refreshList();
        }).catch((err: any) => {
            toast.error(CONSTANTS.ERROR_DELETED, {
                position: "top-right",
                autoClose: 5000,
            });
        });
    }

    const onChangeName = (field: string, e: ChangeEvent<HTMLInputElement>) => {
        if (field === 'name') {
            setNameContact(e.target.value);
            setFocusField('name')
        }
        if (field === 'address') {
            setAddressContact(e.target.value)
            setFocusField('address')
        }
        if (field === 'phone') {
            setPhoneContact(Number.parseInt(e.target.value))
            setFocusField('phone')
        }
        if (field === 'email') {
            setEmailContact(e.target.value)
            setFocusField('email')
        }
    }


    const submitFields = () => {
        setEdit(false)
        let edit = {
            name: nameContact,
            address: addressContact,
            phone: phoneContact,
            email: emailContact
        }
        const res = put(idItem, edit, 'contact');
        res.then((res: any) => {
            toast.success(CONSTANTS.UPDATED, {
                position: toast.POSITION.TOP_RIGHT
            });
            refreshList();
        }).catch(err => {
            toast.error(CONSTANTS.ERROR_UPDATED, {
                position: "top-right",
                theme: "dark",
                autoClose: 5000,
            });
        });

    }

    return (
        <>
            {items ? items.map(({ id, name, email, phone, address }: Contact, index: number) => (
                <tr className='generic-table tr-border' key={nanoid()}>
                    {edit && idItem === id ?
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
                                                        <tr>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    required={true}
                                                                    className="form-control generic-table"
                                                                    value={nameContact}
                                                                    autoFocus={focusField === 'name' ? true : false}
                                                                    placeholder="Name"
                                                                    onChange={(e) => onChangeName('name', e)}
                                                                />
                                                            </td>
                                                        </tr>
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
                                                        <tr>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    required={true}
                                                                    className="form-control generic-table"
                                                                    value={addressContact}
                                                                    autoFocus={focusField === 'address' ? true : false}
                                                                    placeholder="Address"
                                                                    onChange={(e) => onChangeName('address', e)}
                                                                />
                                                            </td>
                                                        </tr>
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
                                                        <tr>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    required={true}
                                                                    className="form-control generic-table"
                                                                    value={phoneContact}
                                                                    autoFocus={focusField === 'phone' ? true : false}
                                                                    placeholder="Phone"
                                                                    onChange={(e) => onChangeName('phone', e)}
                                                                />
                                                            </td>
                                                        </tr>
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
                                                        <tr>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    required={true}
                                                                    className="form-control generic-table"
                                                                    value={emailContact}
                                                                    autoFocus={focusField === 'email' ? true : false}
                                                                    placeholder="Email"
                                                                    onChange={(e) => onChangeName('email', e)}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="align-middle text-center">
                                {edit ?
                                    <span className='px-2 generic-table tag-a' onClick={submitFields}>Save</span>
                                    :
                                    <span className='px-2 generic-table tag-a' onClick={() => runEdit({ id, name, email, phone, address })}>Edit</span>
                                }
                                <span id='button-delete' className='px-2 generic-table tag-a' onClick={(e) => onHandleRemove(id, e)}>Remove</span>
                            </td>
                        </>
                        :
                        <RowStaticDataCommon
                            runEdit={runEdit}
                            items={{ id: id, name: name, email: email, phone: phone, address: address }}
                            onHandleRemove={onHandleRemove}
                        />

                    }
                </tr>
            )) : null
            }
        </>
    );
}

export default RowEditCommon;