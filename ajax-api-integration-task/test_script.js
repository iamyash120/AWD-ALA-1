const fs = require('fs');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync('weather-ajax-demo.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost' });
dom.window.fetch = fetch;

const errors = [];
dom.window.console.error = (...args) => errors.push(args.join(' '));
dom.window.addEventListener('error', (event) => errors.push(event.error ? event.error.stack : event.message));
dom.window.addEventListener('unhandledrejection', (event) => errors.push(event.reason ? event.reason.stack : event.reason));

setTimeout(() => {
  try {
    dom.window.document.getElementById('city').value = 'London';
    dom.window.document.getElementById('fetchBtn').click();
  } catch (e) {
    errors.push('CLICK ERROR ' + e.message);
  }
}, 500);

setTimeout(() => {
  const log = dom.window.document.getElementById('log').innerHTML;
  const display = dom.window.document.getElementById('display').innerHTML;
  fs.writeFileSync('test_output.json', JSON.stringify({ errors, log, display }, null, 2));
  process.exit(0);
}, 3000);
