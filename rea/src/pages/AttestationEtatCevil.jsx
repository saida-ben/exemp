import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar1 from '../components/Navbar1'
  
const AttestationEtatCevil = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  return (
    <>< Navbar1/>
    <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
    <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="ان ضابط الحالة المدنية" type="text" name="ان ضابط الحالة المدنية" id="ان ضابط الحالة المدنية" placeholder="ان ضابط الحالة المدنية"/>
</div>
<div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-40"> 
        يشهد ان المسمى</label>
    <div> 
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم العائلي" placeholder="الإسم الشخصي"/>
        </div>
      </div>
      <div class="formbold-input-wrapp formbold-mb-3">
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الساكن ب" type="text" name="الساكن ب" id="الساكن ب" placeholder="الساكن ب"/>
  <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="حسب رسم الولادة عدد" type="text" name="حسب رسم الولادة عدد" id="حسب رسم الولادة عدد" placeholder="حسب رسم الولادة عدد"/>
</div>
</div>
<div class="formbold-input-wrapp formbold-mb-3">
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="بتاريخ" type="text" name="بتاريخ" id="بتاريخ" placeholder="بتاريخ"/>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الموافق ل"  type="text" name="الموافق ل"  id="الموافق ل"  placeholder="الموافق ل" />
</div>
</div>
<div class="formbold-input-wrapp formbold-mb-3">
      <label for="firstname" class="formbold-form-label ml-40"> 
      من أبيه</label>
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم العائلي" placeholder="الإسم الشخصي"/>
        </div>
      </div>

      <div class="formbold-input-wrapp formbold-mb-3">
      <label for="firstname" class="formbold-form-label ml-40"> 
       وأمه</label>
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي"/>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم العائلي" placeholder="الإسم الشخصي"/>
        </div>
        </div>
      

  <button to="/AffichageExonérationFrais"
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>
</div>
  </div>
  </>
    
  )
}

export default AttestationEtatCevil
