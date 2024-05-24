import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const styleObj={
    backgroundColor:"gray",
  }
  const btnClick=(e:any)=>{
    console.log(e)
  }
  return (
    <>
     <Input onchange={(e:any)=>{
        console.log(e.target.value)
      }}/>
      <Button btnClick={btnClick} className={styleObj} value="Login"/> 
      <Button btnClick={btnClick}  value="Sign Up"/> 
    </>
  );
};

export default App;
