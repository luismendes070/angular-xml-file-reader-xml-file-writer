import * as fs from 'fs';
import * as xml2js from 'xml2js';

try{
// Read the XML file
const xml = fs.readFileSync('./assets/users.xml', 'utf-8');

// Convert the XML to a JavaScript object
xml2js.parseString(xml, (err, result) => {
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