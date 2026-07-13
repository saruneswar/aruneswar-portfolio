const fs = require('fs');
const https = require('https');
const path = require('path');

const commitHash = 'ae38b030b8dd8d2b1eda898481fc8e4ee423ecee';
const repo = 'saruneswar/aruneswar-portfolio';

const files = [
  'src/components/ui/ExperienceCard.tsx',
  'src/components/ui/PremiumGallery.tsx',
  'src/components/ui/ProjectGallery.tsx'
];

async function downloadFile(file) {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/${repo}/${commitHash}/${file}`;
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          fs.writeFileSync(path.join(__dirname, file), data);
          console.log(`Successfully restored: ${file}`);
          resolve(true);
        });
      } else if (res.statusCode === 404) {
        console.log(`File not found in stable commit (ignored): ${file}`);
        resolve(false);
      } else {
        console.error(`Failed to fetch ${file}: HTTP ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error fetching ${file}: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  console.log(`Starting strict Version 1 rollback (Commit: ${commitHash})`);
  console.log('Restoring ONLY the files modified today...');
  for (const file of files) {
    if (fs.existsSync(path.join(__dirname, file))) {
      await downloadFile(file);
    }
  }
  console.log('Rollback complete! No other files were touched.');
}

main();
