const body = $input.first().json.body;

const name = body.name || 'Unknown';
const company = body.company || 'Unknown';
const email = body.email || '';
const employees = parseInt(body.employees) || 0;

// Score the lead based on company size
let score = 0;
let priority = '';

if (employees >= 100) {
  score = 90;
  priority = 'HIGH';
} else if (employees >= 20) {
  score = 60;
  priority = 'MEDIUM';
} else {
  score = 30;
  priority = 'LOW';
}

return [{
  json: {
    name,
    company,
    email,
    employees,
    score,
    priority,
    received_at: new Date().toISOString(),
    message: `Lead ${name} from ${company} scored ${score}/100 - ${priority} priority`
  }
}];
