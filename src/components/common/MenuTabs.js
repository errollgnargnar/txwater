import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SysAccord from "./SysAccord";

import InstallPics from './InstallPics';
import AboutPage from './AboutPage';
import WellPage from './WellPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({location, isLoaded, setIsLoaded}) {
  const [value, setValue] = useState(0);

  const [packSeven, setPackSeven] = useState(2); // 0 = solo, 1 = w/ Ro, 2 = w/ Ro and Soaps
  const [packSeries, setPackSeries] = useState(1); // 0 = solo, 1 = w/ Ro
  const [installType, setInstallType] = useState(2); // 0 = loop, 1 = ss, 2 = os;
  const [isFinance, setIsFinance] = useState(1); // 0 = cash, 1 = finance;

  // state for well page on sysaccord
  const [supplyType, setSupplyType] = useState("Utility");

  // well equip states
  const [wellEquip, setWellEquip] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem('accessEmail');
    navigate('/login');
  }

  return (
    <Box sx={{ width: '95%', margin: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Systems" {...a11yProps(1)} />
          <Tab label="Pictures" {...a11yProps(2)} />
          <Tab label="Logout" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AboutPage location={location} />
      </TabPanel>
      <TabPanel value={value} index={1}>

        { supplyType === "Utility" ? (
          <SysAccord packSeven={packSeven} setPackSeven={setPackSeven} packSeries={packSeries} setPackSeries={setPackSeries} installType={installType} setInstallType={setInstallType} isFinance={isFinance} setIsFinance={setIsFinance} supplyType={supplyType} setSupplyType={setSupplyType}/>
        ) : <WellPage supplyType={supplyType} setSupplyType={setSupplyType} wellEquip={wellEquip} setWellEquip={setWellEquip} isLoaded={isLoaded} setIsLoaded={setIsLoaded} totalCost={totalCost} setTotalCost={setTotalCost} /> }
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InstallPics />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <button onClick={handleLogout}>Log out</button>
      </TabPanel>
    </Box>
  );
}
