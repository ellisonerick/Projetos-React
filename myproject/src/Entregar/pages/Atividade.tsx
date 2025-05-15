import CabeAtv from "../../componentes/cabeatv.tsx/index.tsx";
import Comp1 from "../../componentes/comp1/index.tsx";
import Comp2 from "../../componentes/comp2/index.tsx";
import Comp3 from "../../componentes/comp3/index.tsx";
import Comp4 from "../../componentes/comp4/index.tsx";

function Atividade(){
    return(
        <div>
            <div className="atv-cabe">
                <CabeAtv/>
            </div>
            <div className="atv-hori">
                <Comp1/>
                <Comp2/>
            </div>
            <div className="atv-vert">
                <Comp3/>
                <Comp4/>
            </div>
        </div>
    )
}

export default Atividade;