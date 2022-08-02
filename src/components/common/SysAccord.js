import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Carousel from 'react-bootstrap/Carousel';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import PriceSetup from './PriceSetup';

import { useEffect, useState } from "react";
import * as data from '../../systems';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState('panel1');
  const [systemData, setSystemData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [packSeven, setPackSeven] = useState(2); // 0 = solo, 1 = w/ Ro, 2 = w/ Ro and Soaps
  const [packSeries, setPackSeries] = useState(1); // 0 = solo, 1 = w/ Ro
  const [installType, setInstallType] = useState(2); // 0 = loop, 1 = ss, 2 = os;
  const [isFinance, setIsFinance] = useState(1); // 0 = cash, 1 = finance;
  const [isSettingPrice, setIsSettingPrice] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    (async() => {
      setSystemData(data.systems);
      setLoaded(true);
    })();
  });

  return (
    <div>
      <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
        <p>{' '}</p>
        <div>
          <SettingsSuggestIcon onClick={() => setIsSettingPrice(true)}/>
        </div>
      </div>
      
      {isSettingPrice && <PriceSetup setIsSettingPrice={setIsSettingPrice} installType={installType} setInstallType={setInstallType} isFinance={isFinance} setIsFinance={setIsFinance} packSeven={packSeven} setPackSeven={setPackSeven} packSeries={packSeries} setPackSeries={setPackSeries}/>}

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{margin:"auto"}}>
            <strong>{loaded && systemData[0].name}</strong>
            {/* about system */}
            {loaded && systemData[0].features.map((feature,index) => (
                <div key={index}>- {feature} -</div>
            ))}
            {loaded && packSeven == 2 && systemData[0].addOns.map((addOn, index) => (
                <div key={index}>- {addOn} -</div>
            ))}
            {loaded && packSeven == 1 && <div>{systemData[0].addOns[0]}</div>}
            {/* price */}
            ${loaded && systemData[0].prices[packSeven][installType][isFinance]}.00 - Equipment, Installation, and Tax
            {/* is cash display */}
            {!isFinance && <><br/>Cash/Check/CC</>}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Carousel>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + 'proPg1.png'}
              />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + 'proPg2.png'}
              />
              </Carousel.Item>
            </Carousel>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{margin:"auto"}}>
            <strong>{loaded && systemData[1].name}</strong>
            {/* about system */}
            {loaded && systemData[1].features.map((feature, index) => (
                <div key={index}>- {feature} -</div>
            ))}
            {loaded && packSeven == 2 && systemData[1].addOns.map((addOn, index) => (
                <div key={index}>- {addOn} -</div>
            ))}
            {loaded && packSeven == 1 && <div>{systemData[1].addOns[0]}</div>}
            {/* price */}
            ${loaded && systemData[1].prices[packSeven][installType][isFinance]}.00 - Equipment, Installation, and Tax
            {/* is cash display */}
            {!isFinance && <><br/>Cash/Check/CC</>}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Carousel>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + 's700pg1.png'}
              />
              </Carousel.Item>
            </Carousel>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{margin:"auto"}}>
            <strong>{loaded && systemData[2].name}</strong>
            {/* about system */}
            {loaded && systemData[2].features.map((feature, index) => (
                <div key={index}>- {feature} -</div>
            ))}
            {loaded && packSeries == 1 && systemData[2].addOns.map((addOn, index) => (
                <div key={index}>- {addOn} -</div>
            ))}
            {/* price */}
            ${loaded && systemData[2].prices[packSeries][installType][isFinance]}.00 - Equipment, Installation, and Tax
            {/* is cash display */}
            {!isFinance && <><br/>Cash/Check/CC</>}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Carousel>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + 's200pg1.png'}
              />
              </Carousel.Item>
            </Carousel>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography  style={{margin:"auto"}}>
            <strong>{loaded && systemData[3].name}</strong>
            {/* about system */}
            {loaded && systemData[3].features.map((feature, index) => (
                <div key={index}>- {feature} -</div>
            ))}
            {loaded && packSeries == 1 &&  systemData[3].addOns.map((addOn, index) => (
                <div key={index}>- {addOn} -</div>
            ))}
            {/* price */}
            ${loaded && systemData[3].prices[packSeries][installType][isFinance]}.00 - Equipment, Installation, and Tax
            {/* is cash display */}
            {!isFinance && <><br/>Cash/Check/CC</>}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Carousel>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + 's100pg1.png'}
              />
              </Carousel.Item>
            </Carousel>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
