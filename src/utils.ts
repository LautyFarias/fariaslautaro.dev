export const calculateAgeFromBirthdate = (birthdate: string) =>
  Math.floor((+new Date() - new Date(birthdate).getTime()) / 3.15576e10)
