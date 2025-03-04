import { useDisclosure } from '@mantine/hooks';
import { Button, Flex, Modal } from '@mantine/core';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { verifyCard } from '../../service/PaymentService';

interface VerifyModalProps {
    open: boolean;
}

export const VerifyModal: React.FC<VerifyModalProps> = ({ open }) => {
    const [opened, { close }] = useDisclosure(open);
    const [code, setCode] = useState<string>("")
    const token = localStorage.getItem('token')

    const {mutate: postVerifyCard} = useMutation({
        mutationKey: ['payment'],
        mutationFn: verifyCard
    })

    const sendVerifyCode = () => {
        if(token) {
            postVerifyCard({
                token: token,
                code: code
            })
        }
        else {
            console.log('not found token');
        }
    }

    return (
        <Modal opened={opened} onClose={close} title="Verify Card">
            <Flex>
                <label>Verify Code</label>
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
            </Flex>
            <Button onClick={sendVerifyCode}>Send</Button>
        </Modal>
    )
}

