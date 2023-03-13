import * as fs from 'fs';
import * as xml2js from 'xml2js';

try{
// Read the XML file
const xml:any = fs.readFileSync('./assets/users.xml', 'utf-8');

// Convert the XML to a JavaScript object
xml2js.parseString(xml, (err:any, result:any) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Do something with the result object
  console.log(result);
});

}catch(err){
console.log('xml file reader error');
}finally{

}