export function getRolesString(roles) {
  let rolesString = ``;
  roles.map(function(role, index) {
    if (index === 0) {
      rolesString += `${role}`;
    } else {
      rolesString += ` / ${role}`;
    }
  });
  return rolesString;
};
