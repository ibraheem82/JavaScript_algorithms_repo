const name  ='Ibraheem';
const age = 20;
const job = 'Programmer';
const city = 'Miami';


// ===> with templates strings

html = '<ul><li>Name2: ' + name +  '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '  </li><li>City: ' + city + '</li></ul>';

// document.body.innerHTML = html;



html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
`;

document.body.innerHTML = html;