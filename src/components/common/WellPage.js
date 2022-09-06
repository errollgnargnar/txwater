import { useEffect, useState } from 'react';
import SupplyTypeSel from './SupplyTypeSel';

import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from 'firebase/auth';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import FinWindow from './FinWindow';

export default function WellPage({supplyType, setSupplyType, wellEquip, setWellEquip, isLoaded, setIsLoaded, totalCost, setTotalCost}) {

    const dbRef = ref(getDatabase());

    useEffect(() => {
        getAuth();
        get(child(dbRef, `WELL EQUIPMENT`)).then((snapshot) => {
            if (snapshot.exists()) {
            //   console.log(snapshot.val());
              if(wellEquip.length !== snapshot.val().length) {
                setWellEquip(snapshot.val());
                console.log(wellEquip);
              } 
              if(snapshot.val().length == wellEquip.length && wellEquip[0].quantity == undefined) {
                init_wellQuant();
                setIsLoaded(true);
                console.log('well equipment has been set');
                console.log(wellEquip);
              } else {
                setIsLoaded(!isLoaded);
              }
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }, [isLoaded]);

    const init_wellQuant = () => {
        if(wellEquip.length !== 0) { 
            wellEquip.forEach((item, index) => {
                item.quantity = 0;
            });
            setWellEquip(wellEquip);
        } else {
            console.log('initializing well equip');
            setTimeout(() => {
                init_wellQuant()
            }, 1000);
        }
    }

    const setCost = () => {
        let finalCost = 0;
        let installItem = wellEquip[wellEquip.length-1];
        let installCost = installItem[Object.keys(installItem)[0]];        finalCost += installCost;
        wellEquip.forEach(item => {
            // console.log(item);
            finalCost += (item[Object.keys(item)[2]] * item[Object.keys(item)[0]] *3.1 );
        });
        setTotalCost(finalCost);
    }
    const wellItemsMap = wellEquip.map((item, index) => {
        if (index === wellEquip.length-1) return; // dont display install
        else {
            return (
                <div>
                    <div key={index} style={{display:"flex", justifyContent:"space-between", margin:"2%"}}>
                        <FormControlLabel 
                            control={<Checkbox checked={item[Object.keys(item)[2]] > 0 ? true : false}/>}
                            label={Object.keys(item)[0]}/>
                        <TextField
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            value={item[Object.keys(item)[2]]}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{zIndex:0}}
                            onChange={(e) => {
                                if(e.target.value < 0) {
                                    item[Object.keys(item)[2]] = 0;
                                    e.target.value = 0;
                                    setCost();
                                    // console.log(item, wellEquip);
                                } else {
                                    item[Object.keys(item)[2]]= e.target.value;
                                    setCost();
                                    // console.log(item, wellEquip);
                                }
                            }}
                        />
                    </div>
                    <div style={{textAlign:"left"}}>
                        {item.desc}
                    </div>
                    <hr/>
                </div>

            );
        }
    });

    return (
        <div style={{margin: "auto"}}>
            <div>
                <SupplyTypeSel supplyType={supplyType} setSupplyType={setSupplyType} />
            </div>
            <FormGroup>
                {wellItemsMap}
            </FormGroup>
            <div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div>
                        Total: 
                    </div>
                    <div>
                        <div>
                            Cash/Card/Check: {'  '}
                            {totalCost !== 745.8 ? (
                            `$${Math.floor(totalCost)}.00`
                            ) : `$0.00`}
                        </div>
                        <div>
                            Finance: {'  '}
                            {totalCost !== 745.8 ? (
                            `$${Math.floor(totalCost * 1.06)}.00`
                            ) : `$0.00`} <br/>
                            <div>
                                <FinWindow price={Math.floor(totalCost * 1.06)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}