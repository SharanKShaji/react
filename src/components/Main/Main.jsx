import Background from "../Background/Background";
import Toppicks from "../Toppicks/Toppicks";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import Shoppingcart from "../Shoppingcart/Shoppingcart";
import { Filter } from "../Filter/Filter";

const Main = () => {
  return (
    <div>
      <Background></Background>
      <Toppicks />
      <Slider />
      <Filter></Filter>
      <Shoppingcart />
      <Footer />
    </div>
  );
};

export default Main;
