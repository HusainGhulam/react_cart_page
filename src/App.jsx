import NetflixSeries2 from "./components/NetflixSeries2";
import "./components/Ntflix.css";
import "./components/Ntflix.module.css";
export const App = () => {
  return (
    <>
      <section>
        <h1 className="common-heading">This is card heading</h1>
        <NetflixSeries2 />
      </section>
    </>
  );
};
