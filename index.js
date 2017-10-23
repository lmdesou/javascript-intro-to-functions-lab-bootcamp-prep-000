var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello'

lowercase.toLowerCase() === lowercase

var mixedCase = 'I love you, Grandma.'

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}
function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return ("YES INDEED!")
  } else if (string === string.toLowerCase()) {
    return ("I can\'t hear you!")
  }
}
