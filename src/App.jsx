import CardOne from "./components/CardOne/CardOne";
import animals from "./data";



export default function App(){
  return(
    <div className="wrapper">
          {animals.map(animal =>
            <CardOne
              diet={animal.diet}
              key={animal.name}
              name={animal.name}
              size={animal.size}
            />
          )}
        </div>
  )
}
