import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar1 from '../components/Navbar1';

const ParcourScolaire = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  return (
  <>< Navbar1/>
<div class="formbold-main-wrapper">
  
  <div class="formbold-form-wrapper">
<div class="formbold-input-wrapp formbold-mb-3">
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الموسم الدراسي"type="text" name="الموسم الدراسي" id="الموسم الدراسي" placeholder="الموسم الدراسي"/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for=" القسم"type="text" name="القسم" id="القسم" placeholder="القسم"/>
       </div>
      </div>
      <div class="formbold-input-wrapp formbold-mb-3">
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="معدل الدورة 1 "type="text" name="معدل الدورة 1 " id="معدل الدورة 1 " placeholder="معدل الدورة 1 "/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="معدل العام"type="text" name="معدل العام" id="معدل العام" placeholder="معدل العام"/>
       </div>
      </div>
      <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="القرار السنوي"type="text" name="القرار السنوي"id="القرار السنوي"placeholder="القرار السنوي"/>
      </div>

      <Link to="/AffichageParcour">
     
      <button 
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>
       </Link>
</div>
</div>

</>
)
}

export default ParcourScolaire
