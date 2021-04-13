//@ts-check
function click(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

const spike_template = `
Timebox: <number> days
*Description*

*What needs to be done*
 * Step 1
 * Contact X


*Acceptance criteria*
  * Write tests
`


const story_template = `
*Description*

*What needs to be done*
 * Step 1
 * Contact X

*Acceptance criteria*
  * Write tests
`

document.addEventListener('DOMContentLoaded', () => {
  const spike_button = document.getElementById('spike');
  spike_button.addEventListener('click', () => click(spike_template));

  const story_button = document.getElementById('story');
  story_button.addEventListener('click', () => click(story_template));
});




