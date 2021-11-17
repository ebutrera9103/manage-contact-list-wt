import React from 'react';
import { Button } from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface Props {
    title: string;
    message: string;
    actions: any;
}

const ConfirmDialogTek = (props: Props) => {
    const { title, message, actions = [] } = props;
    const options = {
        title: title,
        message: message,
        childrenElement: () => <div />,
        customUI: ({ title, message, onClose }: any) => {
            return (
                <div className='custom-ui' style={{ backgroundColor: '#880E4F', padding: "30px", color: 'white' }}>
                    <h3>{title}</h3>
                    <p style={{ fontSize: '0.82rem' }}>{message}</p>
                    <div className="d-flex justify-content-center align-items-center">
                        {actions.map((item: { color: string | undefined; callback: (arg0: any) => void; label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
                            return <Button
                                style={{ borderRadius: 0, fontSize: '0.90rem' }}
                                color={item.color}
                                key={index}
                                onClick={() => item.callback(onClose)}>{item.label}
                            </Button>;
                        })}
                    </div>
                </div>
            );
        }
    };
    confirmAlert(options);
};

ConfirmDialogTek.propTypes = {};

ConfirmDialogTek.defaultProps = {};

export default ConfirmDialogTek;