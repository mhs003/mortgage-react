import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
    const bank_limit = 10000;

    return (
        <>
            <SliderComponent
                defaultValue={data.homeValue}
                amount={data.homeValue}
                value={data.homeValue}
                min={1000}
                max={bank_limit}
                label='Home Value'
                unit="$"
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    homeValue: value,
                    downPayment: value * 0.2,
                    loanAmount: value * 0.8
                })}
            />
            <SliderComponent
                defaultValue={data.downPayment}
                amount={data.downPayment}
                value={data.downPayment}
                min={0}
                max={data.homeValue}
                label='Down Paymentt'
                unit="$"
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: value,
                    loanAmount: data.homeValue - value
                })}
            />
            <SliderComponent
                defaultValue={data.loanAmount}
                amount={data.loanAmount}
                value={data.loanAmount}
                min={0}
                max={data.homeValue}
                label='Load Amount'
                unit="$"
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: value,
                    downPayment: data.homeValue - value
                })}
            />
            <SliderComponent
                defaultValue={data.interestRate}
                amount={data.interestRate}
                value={data.interestRate}
                min={2}
                max={18}
                label='Interest Rate'
                unit="%"
                step={0.5}
                onChange={(e, value) => setData({
                    ...data,
                    interestRate: value
                })}
            />
        </>
    )
}

export default SliderSelect