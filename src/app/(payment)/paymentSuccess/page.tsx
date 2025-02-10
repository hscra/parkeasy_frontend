'use client';
import React from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Button, Stack } from "@mui/material";
import { useRouter } from 'next/navigation'

const PaymentSuccess: React.FC = () => {
    const router = useRouter()

    const completePayment = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let id = localStorage.getItem("reservationId") ?? 0;
        if (id === 0) return;

        fetch(process.env.SERVER_DOMAIN + "/reservation/completeReservationPayment?Id=" + id, {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) })
                }
                router.push("/")
            })
            .catch((error) => {
                console.log("Payment confirmation error!", error)
            })
    }

    return (
        <div id="home" className="flex justify-center align-center">
            <Card variant="outlined" color="primary" sx={{ minWidth: 275, minHeight: 50, padding: 2 }}>
                <CardContent>
                    <form onSubmit={(e) => completePayment(e)}>
                        <Stack spacing={1}>
                            <Button type="submit">Go Back</Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default PaymentSuccess;
