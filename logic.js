function prompts() {
  document.getElementById('prompts').innerHTML = 'First, please select a character:';
}

function characters(choice) {
  let character = '';
  if (choice === 'hobbit') {
    character = 'Hobbit';
  } else if (choice === 'man') {
    character = 'Man';
  } else if (choice === 'dwarf') {
    character = 'Dwarf';
  } else {
    character = 'Elf';
  }
  document.getElementById('characters').innerHTML = character;
}
