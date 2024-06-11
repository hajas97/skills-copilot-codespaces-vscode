function skillsMember() {
  var member = new Member();
  member.skills = ['JavaScript', 'CSS', 'HTML'];
  member.getSkills = function() {
    return this.skills;
  };
  return member;
}