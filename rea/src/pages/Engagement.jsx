import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar1  from '../components/Navbar1';
import Items  from '../pages/Items';

const Engagement = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  return (
    <>< Navbar1/>
    <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
    <div class="formbold-input-wrapp formbold-mb-3">

        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="أنا الممضي أسفله "type="text" name="أنا الممضي أسفله " id="أنا الممضي أسفله " placeholder="أنا الممضي أسفله "/>
     <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="بصفتي" type="text" name="بصفتي" placeholder="بصفتي"/>
       </div>
      </div>
      <div class="formbold-input-wrapp formbold-mb-3">
        
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="العنوان"type="text" name="العنوان" id="العنوان "placeholder="العنوان "/>
     <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="رقم البطاقة الوطنية " type="text" name="رقم البطاقة الوطنية " placeholder="رقم البطاقة الوطنية "/>
       </div>
      </div>
      <div class="formbold-mb-3">
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الهاتف"type="text" name="الهاتف" placeholder="الهاتف"/>
     
   </div> 
  
    <Link to="/AffichageDossierMedical">
    <button to="/AffichageExonérationFrais"
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

export default Engagement
