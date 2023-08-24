import Avatar from "./components/Avatar";

function App() {

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson"
};

return (
<> 
<Avatar { ...bart}/>
<Avatar { ...homer}/>
</>
)
}


export default App
