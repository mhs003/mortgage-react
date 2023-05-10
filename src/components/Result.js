import { Stack, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import React from 'react'
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
    const { homeValue, loanAmount, loanTerm, interestRate } = data;

    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;

    const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);

    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

    const pieChartData = {
        labels: ['Principle', 'Interest'],
        datasets: [
            {
                label: 'Ratio of Principle and Interest',
                data: [homeValue, totalInterestGenerated],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
    return (
        <Stack gap={3}>
            <Typography variant="h5" textAlign="center">
                Monthly Payment: $ {monthlyPayment.toFixed(2)}
            </Typography>
            <Stack direction="row" justifyContent="center">
                <div>
                    <Pie data={pieChartData} />
                </div>
            </Stack>
        </Stack>
    )
}

export default Result