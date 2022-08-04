import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {useEffect, useState} from "react";

export default function PriceSetup({setIsSettingPrice, installType, setInstallType, isFinance, setIsFinance, packSeven, setPackSeven, packSeries, setPackSeries}) {

    const [installTypeVerbose, setInstallTypeVerbose] = useState('');
    const [paymentTypeVerbose, setPaymentTypeVerbose] = useState('');
    const [sevenPackVerbose, setSevenPackVerbose]     = useState('');
    const [seriesPackVerbose, setSeriesPackVerbose]   = useState('');

    useEffect(() => {
        switch (installType) {
            case 0:
                setInstallTypeVerbose("Looped")
                break;
            case 1:
                setInstallTypeVerbose("Same Sider");
                break;
            case 2:
                setInstallTypeVerbose("Opposite Sider");
                break;
        }
        switch (isFinance) {
            case 0:
                setPaymentTypeVerbose("Cash")
                break;
            case 1:
                setPaymentTypeVerbose("Finance");
                break;
        }
        switch(packSeven) {
            case 0:
                setSevenPackVerbose('None');
                break;
            case 1:
                setSevenPackVerbose('RO');
                break;
            case 2: 
                setSevenPackVerbose('Soaps and RO');
                break;
        }
        switch(packSeries) {
            case 0:
                setSeriesPackVerbose('None');
                break;
            case 1:
                setSeriesPackVerbose('RO');
                break;
        }
    });

    const handleChangeInstall = (e) => {
        switch(e.target.value) {
            case "Looped":
                setInstallType(0);
                break;
            case "Same Sider":
                setInstallType(1);
                break;
            case "Opposite Sider":
                setInstallType(2);
                break;
        }
    }

    const handleChangePayment = (e) => {
        switch(e.target.value) {
            case "Finance":
                setIsFinance(1);
                break;
            case "Cash":
                setIsFinance(0);
                break;
        }
    }

    const handleSevenPack = (e) => {
        switch(e.target.value) {
            case "Soaps and RO":
                setPackSeven(2);
                break;
            case "RO":
                setPackSeven(1);
                break;
            case "None":
                setPackSeven(0);
                break;
        }
    }
    const handleSeriesPack = (e) => {
        switch(e.target.value) {
            case "RO":
                setPackSeries(1);
                break;
            case "None":
                setPackSeries(0);
                break;
        }
    }


    return (
        <div style={{margin: "auto", position:"absolute", top:"14%", left:"30%", backgroundColor:"white", zIndex: 1, width:"40%", border: "1px solid gray"}}>
            <header onClick={() => setIsSettingPrice(false)} style={{border: "1px solid gray", float: "right", padding: "3%", backgroundColor:"#F78DA7"}}>
                x
            </header><br/>
            <div style={{margin:"2%"}}>
                <strong>Setup</strong>
            </div>
            <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{margin:"3%", display:"flex"}}>
                        <InputLabel id="demo-simple-select-label">Install</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={installTypeVerbose}
                        label="Install"
                        onChange={handleChangeInstall}
                        >
                            <MenuItem value={'Looped'}>Looped</MenuItem>
                            <MenuItem value={'Same Sider'}>Same Sider</MenuItem>
                            <MenuItem value={'Opposite Sider'}>Opposite Sider</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{margin:"3%", display:"flex"}}>
                        <InputLabel id="demo-simple-select-label">Payment</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paymentTypeVerbose}
                        label="Payment"
                        onChange={handleChangePayment}
                        >
                            <MenuItem value={'Finance'}>Finance</MenuItem>
                            <MenuItem value={'Cash'}>Cash</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{margin:"3%", display:"flex"}}>
                        <InputLabel id="demo-simple-select-label">7 Stage Add Ons</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sevenPackVerbose}
                        label="7 Stage Add Ons"
                        onChange={handleSevenPack}
                        >
                            <MenuItem value={'Soaps and RO'}>Soaps and RO</MenuItem>
                            <MenuItem value={'RO'}>RO</MenuItem>
                            <MenuItem value={'None'}>No Add Ons</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{margin:"3%", display:"flex"}}>
                        <InputLabel id="demo-simple-select-label">Series Add Ons</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={seriesPackVerbose}
                        label="Series Add Ons"
                        onChange={handleSeriesPack}
                        >
                            <MenuItem value={'RO'}>RO</MenuItem>
                            <MenuItem value={'None'}>No Add Ons</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}