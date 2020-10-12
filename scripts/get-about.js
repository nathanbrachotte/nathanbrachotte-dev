const contentful = require('contentful');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

console.log({ ACCESS_TOKEN, SPACE_ID });

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

console.log({ client });

const getAboutEntry = (entry) => entry.sys.contentType.sys.id === 'about';

const main = async () => {
  const entries = await client.getEntries();
  const about = entries.items.find(getAboutEntry).fields;

  console.log({ entries, about });

  fs.writeFileSync(
    path.join(process.cwd(), 'about.json'),
    JSON.stringify(about, null, 2),
  );
};

main();
