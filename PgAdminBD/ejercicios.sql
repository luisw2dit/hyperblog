SELECT email
FROM platzi.alumnos
WHERE email~*´[A_Z0-9._]+@[A_Z0-9._%+-]+\,[A-Z]{2,4}´;
