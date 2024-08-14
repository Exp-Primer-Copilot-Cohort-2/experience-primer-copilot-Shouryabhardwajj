function skillsMember() {
return {
restrict: 'E',
templateUrl: 'modules/skills/views/member.html',
controller: 'Skills MemberController',
controlleras: 'vm',
bindToController: true,
scope: {
member: 'm'
}
};
}
