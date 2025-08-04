import { useNavigate } from "react-router-dom"; 
import HeroGrid from "../components/HeroGrid";

const Home = () => {
 
  const navigate = useNavigate(); // useRouter yerine useNavigate çağırıldı

 
  return (
    <div className="flex flex-col">
      <HeroGrid />
     
    </div>
  );
};

export default Home;
