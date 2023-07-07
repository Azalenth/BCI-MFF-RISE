function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IN6nE52aDw":
        Script1();
        break;
      case "5cZCYtg8QCB":
        Script2();
        break;
      case "6V14ocAnPcY":
        Script3();
        break;
      case "6XgH0yLGLIy":
        Script4();
        break;
      case "6OMhlYFjoe5":
        Script5();
        break;
      case "5iEozY3wmrR":
        Script6();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = day + "/" + month + "/" +year
player.SetVar("DateValue", newName);
}

function Script2()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate);

window.open(urlstring,"_blank","width=1920,height=1440,menubar=no");

}

function Script3()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = day + "/" + month + "/" +year
player.SetVar("DateValue", newName);
}

function Script4()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate);

window.open(urlstring,"_blank","width=1920,height=1440,menubar=no");

}

function Script5()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year

player.SetVar("DateValue", newName);
}

function Script6()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate);

window.open(urlstring,"_blank","width=800,height=600,menubar=no");

}

