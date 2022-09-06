import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export default function FinWindow({price}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const twopercent = Math.ceil(price*0.02);
  const onefivepercent = Math.ceil(price*0.015);
  const onepercent = Math.ceil(price*0.01);
  return (
    <div>
        <Button variant="text" onClick={handleClick}>$0 Down Financing</Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper'}}>
            <strong>1 Yr Same As Cash </strong>
            <div>
                <ul>
                    <li>Pay in Full within 12 Months to <br/> Waive Interest of 17.99%</li>
                    <li>No Prepayment Penalty</li>
                    <li>Min. Payment: ${twopercent} / Month</li>
                </ul>
            </div><hr/>
            <strong>10 Year (120 Months) </strong>
            <div>
                <ul>
                    <li>Reduced APR of 5.9% for 12 months</li>
                    <li>14.99% APR starting month 13</li>
                    <li>First Year Payments: ${onepercent} / Month</li>
                    <li>Remaining Payments: ${onefivepercent} / Month</li>
                </ul>
            </div>
            </Box>
        </Popper>
    </div>
  );
}
