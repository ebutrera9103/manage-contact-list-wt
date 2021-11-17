import { ChangeEvent, useState } from 'react';
import logo from '../../../assets/img/user.png';
import { post } from '../../../services';
import { CONSTANTS } from '../../../config/constants'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validatorEmpty, validatorEmail } from '../../Validator/Validator';
import { TypePropsJustRefresh } from '../Types/Types'
toast.configure();

const RowAddCommon = ({ refreshList }: TypePropsJustRefresh) => {

    const [nameContact, setNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [phoneContact, setPhoneContact] = useState('');
    const [addressContact, setAddressContact] = useState('');
    const [focusField, setFocusField] = useState('');
    const [fieldsEmpty, setFieldsEmpty] = useState([''])

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
            setPhoneContact(e.target.value.toString())
            setFocusField('phone')
        }
        if (field === 'email') {
            setEmailContact(e.target.value)
            setFocusField('email')
        }
    }

    const submitFields = () => {
        let add = {
            "name": nameContact,
            "address": addressContact,
            "phone": phoneContact,
            "email": emailContact
        }
        const validateResponse: boolean = validate([nameContact, addressContact, phoneContact, emailContact]);

        if (validateResponse) {
            const res = post(add, 'contact');
            res.then((res: any) => {
                toast.success(CONSTANTS.CREATED, {
                    position: toast.POSITION.TOP_RIGHT
                });
                refreshList();
                cleanFields();
                setFieldsEmpty([''])
            }).catch(err => {
                toast.error(CONSTANTS.ERROR_CREATED, {
                    position: "top-right",
                    theme: "dark",
                    autoClose: 5000,
                });
            });
        }
    }

    const validate = (add: any[]) => {
        if (validatorEmpty(add) && validatorEmail(add[3])) {
            return true;
        }
        else {
            let fieldsEmpty: string[] = [];
            if (!nameContact) fieldsEmpty.push('nameContact');
            if (!addressContact) fieldsEmpty.push('addressContact')
            if (!phoneContact) fieldsEmpty.push('phoneContact')
            if (!emailContact || !validatorEmail(add[3])) fieldsEmpty.push('emailContact')
            setFieldsEmpty(fieldsEmpty)
            return false
        }
    }


    const cleanFields = () => {
        setNameContact('');
        setAddressContact('')
        setPhoneContact('')
        setEmailContact('')
    }

    return (
        <tr>
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
                                                    className={fieldsEmpty.includes('nameContact') ? "form-control generic-table error-class" : "form-control generic-table"}
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
                                                    className={fieldsEmpty.includes('addressContact') ? "form-control generic-table error-class" : "form-control generic-table"}
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
                                                    type="number"
                                                    required={true}
                                                    className={fieldsEmpty.includes('phoneContact') ? "form-control generic-table error-class" : "form-control generic-table"}
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
                                                    type="email"
                                                    required={true}
                                                    className={fieldsEmpty.includes('emailContact') ? "form-control generic-table error-class" : "form-control generic-table"}
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
                <span id='button-submit' className='px-2 generic-table tag-a submit' onClick={submitFields}>Save</span>
                <span id='button-delete' className='px-2 generic-table tag-a' onClick={cleanFields}>Cancel</span>
            </td>
        </tr>

    );
};

export default RowAddCommon;