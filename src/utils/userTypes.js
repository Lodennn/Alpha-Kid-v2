export const userTypes = [
  { id: 1, value: "Teacher" },
  { id: 2, value: "Parent" },
];

export const userNameMaxLength = 6;

export const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function checkUserType(user) {
  const type = userTypes.find((userType) => userType.value === user);

  return type?.id;
}
