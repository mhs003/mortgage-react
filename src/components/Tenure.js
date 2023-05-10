import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Tenure = ({ data, setData }) => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="tnlabel">Tenure</InputLabel>
                <Select
                    labelId="tnlabel"
                    id="tenure"
                    value={data.loanTerm}
                    label="Tenure"
                    defaultValue={data.loanTerm}
                    onChange={(e) => setData({
                        ...data,
                        loanTerm: e.target.value
                    })}
                >
                    <MenuItem value={5}>5 Years</MenuItem>
                    <MenuItem value={10}>10 Years</MenuItem>
                    <MenuItem value={15}>15 Years</MenuItem>
                    <MenuItem value={20}>20 Years</MenuItem>
                    <MenuItem value={25}>25 Years</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Tenure