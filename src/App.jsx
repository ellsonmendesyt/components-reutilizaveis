
import CardTwo from "./components/CardTwo/CardTwo";
import animals from "./data";



export default function App(){
  return(
    <div className="wrapper">
          {animals.map(animal =>
            <CardTwo
              diet={animal.diet}
              key={animal.name}
              name={animal.name}
              size={animal.size}
            />
          )}
        </div>
  )
}
