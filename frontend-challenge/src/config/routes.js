import AboutUs from "../containers/AboutUs";
import Carreer from "../containers/Carreer";
import CompanyStructure from "../containers/CompanyStructure";
import Contact from "../containers/Contact";
import Products from "../containers/Products";
import Services from "../containers/Services";

const ROUTES = [
  {
    path: "aboutus",
    component: AboutUs,
  },
  {
    path: "company",
    component: CompanyStructure,
  },
  {
    path: "careeer",
    component: Carreer,
  },
  {
    path: "products",
    component: Products,
  },
  {
    path: "services",
    component: Services,
  },
  {
    path: "contact",
    component: Contact,
  },
];

export default ROUTES;
