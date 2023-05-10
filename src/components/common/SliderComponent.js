import { Slider, Stack, Typography } from '@mui/material'
import React from 'react'

const SliderComponent = ({ defaultValue, min, max, label, amount, unit, step, value, onChange }) => {
    return (
        <Stack my={3}>
            <Stack gap={1}>
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">{unit} {amount}</Typography>
            </Stack>
            <Slider
                min={min}
                max={max}
                defaultValue={defaultValue}
                aria-label="Default"
                valueLabelDisplay="auto"
                marks
                step={step}
                value={value}
                onChange={onChange}
            />
            <Stack direction='row' justifyContent='space-between'>
                <Typography variant="caption" color='text.secondary'>{unit} {min}</Typography>
                <Typography variant="caption" color='text.secondary'>{unit} {max}</Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponent