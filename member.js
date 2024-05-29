function skillsMember() {
  let member = {
    name: 'John',
    age: 25,
    skills: ['HTML', 'CSS', 'JavaScript'],
  };

  // Loop through the member object
  for (let key in member) {
    // Check if the key is skills
    if (key === 'skills') {
      // Loop through the skills array
      for (let i = 0; i < member[key].length; i++) {
        // Display each skill
        console.log(member[key][i]);
      }
    }
  }
}