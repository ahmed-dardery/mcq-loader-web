import dss from "./dss";
import dssa from "./dssa";
import modeling from "./modeling";
//import compilers from "./compilers";
import erp from "./erp";
import erp3amaly from "./erp3amaly";
import erpextra from "./erpextra";
const db = {
    DSS: dss,
    DSSA: dssa,
    MODELING: modeling,
//    COMPILERS: compilers,
    ERP: erp,
    ERP_3amaly: erp3amaly,
    ERP_extra: erpextra,
}

export default db;