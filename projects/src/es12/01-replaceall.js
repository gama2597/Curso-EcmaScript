const mensaje =
  "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";

const replaceString = mensaje.replace("JavaScript", "Python");
console.log(replaceString);
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python");
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*");
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'

console.log(mensaje);