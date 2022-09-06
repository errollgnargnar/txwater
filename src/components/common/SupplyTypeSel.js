import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SupplyTypeSel({supplyType, setSupplyType}) {
    return (
        <Box sx={{ minWidth: 120, maxWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Supply Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={supplyType}
                label="Supply Type"
                onChange={(e) => setSupplyType(e.target.value)}
                >
                <MenuItem value="Utility">Utility</MenuItem>
                <MenuItem value="Well">Well</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}