import * as fs from 'fs';
import * as xmlbuilder from 'xmlbuilder2';

// Create the XML document
const xml = xmlbuilder.create('root')
  .ele('child')
    .att('foo', 'bar')
    .txt('Hello, World!')
  .end({ prettyPrint: true });

// Write the XML document to a file
fs.writeFileSync('./assets/users.xml', xml);