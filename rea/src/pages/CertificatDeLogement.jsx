import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar1  from '../components/Navbar1';


   
const CertificatDeLogement = () => {  
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  return (
     <> <Navbar1/>
    <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
    <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="نحن" type="text" name="نحن" id="نحن" placeholder="نحن"/>
</div>
    <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-40"> 
        معلومات حول الطفل </label>
    <div> 
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم العائلي" placeholder="الإسم الشخصي"/>
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
      <div class="formbold-input-wrapp formbold-mb-3">
      <div>
     <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for="مكان الإزدياد"type="text" name="مكان الإزدياد" id="مكان الإزدياد" placeholder="مكان الإزدياد"/>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="تاريخ الإزدياد" type="date" name="تاريخ الإزدياد" id="تاريخ الإزدياد" placeholder="تاريخ الإزدياد"/>
      </div>
     </div>
     <div class="formbold-input-wrapp formbold-mb-3">
      <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="رقم البطاقة الوطنية" type="text" name="رقم البطاقة الوطنية" id="رقم البطاقة الوطنية" placeholder="رقم البطاقة الوطنية"/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for="الهاتف"type="text" name="الهاتف" id="الهاتف" placeholder="الهاتف"/>
     </div>
     </div>
     <div class="formbold-input-wrapp formbold-mb-3">
      <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الحالة العائلية" type="text" name="الحالة العائلية " id="الحالة العائلية " placeholder="الحالة العائلية "/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for=" مهنته" type="text" name=" مهنته" id=" مهنته" placeholder=" مهنته"/>
     </div>
     </div>
     <div class="formbold-input-wrapp formbold-mb-3">
       <div>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for=" مقيم" type="text" name="مقيم" id=" مقيم" placeholder="مقيم"/>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for="منذ" type="date" name="منذ" id="منذ" placeholder="منذ"/>
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

export default CertificatDeLogement
