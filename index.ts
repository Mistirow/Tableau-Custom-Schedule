// Import stylesheets
import './style.css';
import moment from 'moment';
import { CustomViews, CustomView } from './interfaces/CustomView';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
appDiv.innerHTML = `<object id="myObject" width="250" height="200" data=""></object>`;

var tbl = [{
  "name": "pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd3",
  "display_name": "UAT_HL_Res_Fxd3",
  "repository_url": "mortgages_market_changes_rates/MarketChangesRates/pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd3"
},
{
  "name": "pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd4",
  "display_name": "UAT_HL_Res_Fxd4",
  "repository_url": "mortgages_market_changes_rates/MarketChangesRates/pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd4"
},
{
  "name": "pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd5",
  "displayName": "UAT_HL_Res_Fxd5",
  "repository_url": "mortgages_market_changes_rates/MarketChangesRates/pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd5"
}];

var cnstr = [{	
  "schedule_id": "1",
  "user_id": "1271",
  "report_name": "mortgages_market_changes_rates/MarketChangesRates/pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd3",
  "format": "csv",
  "frequency": "D",
  "workbook_id": "642",
  "schedule_datetime": "8/9/2020 08:00:00+10",
  "run_id": "1"
},
{	
  "schedule_id": "2",
  "user_id": "1271",
  "report_name": "mortgages_market_changes_rates/MarketChangesRates/pam.fairbairn@canstar.com.au/UAT_HL_Res_Fxd5",
  "format": "csv",
  "frequency": "D",
  "workbook_id": "642",
  "schedule_datetime": "8/9/2020 09:00:00+10",
  "run_id": "1"
}];

function mergeElements(dest, src) { 
  for(const key in src) { 
      dest[key] = src[key]; 
  } 
  return dest; 
} 

function merged(compKeyDest, compKeySrc, dest, src) { 
  const merged: any[] = [];

  dest.forEach((destEl, destInx) => {
    const cnt: number = merged.length;
    //Attempt to find a match from the second input
    src.forEach((srcEl, srcInx) => {      
      if (destEl[compKeyDest] === srcEl[compKeySrc]) {        
        const combined: {} = mergeElements(destEl, srcEl);
        merged.push(combined);
      } 
    });
    
    //No matches found - add the base
    if (cnt === merged.length) {
      merged.push(destEl);
    }
  }); 
  
  return merged; 
}

// console.log('Test', merged('repositoryUrl', 'report_name', tbl, cnstr)); 
// const customViews: CustomView[] = tbl; console.log(customViews);
const customSchedule: any[] =  merged('repository_url', 'report_name', tbl, cnstr); 
let parsed: string = "";
for (let i: number = 0; i < customSchedule.length; i++) {
  const myobj: [] = customSchedule[i];
  for (const property in myobj) {
    parsed += "<br/>" + property + ": " + myobj[property] + "\n";
    // alert(property);
    // alert(myobj[property]);
  }
  parsed += `<p/>`;
}            
        
appDiv.innerHTML = parsed;