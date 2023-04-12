import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';
import Navbar1 from '../components/Navbar1';   
import { useStateContext } from '../contexts/ContextProvider';

const ExenorationFrais = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  return (
  <> <Navbar1 />
<div class="formbold-main-wrapper">
  
  <div class="formbold-form-wrapper">
      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-40"> 
        معلومات حول الطفل 
        </label>
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for=" رقم" type="text" name="رقم" id="رقم" placeholder="رقم "/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="بتاريخ" type="text" name="بتاريخ" id="بتاريخ" placeholder="بتاريخ"/>
        </div>
      </div>
     
         <div class="formbold-input-wrapp formbold-mb-3">
        
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="اسم الولي" type="text" name="اسم الولي" id="اسم الولي" placeholder="اسم الولي"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for=" نسب الولي  " type="text" name=" نسب الولي" id=" نسب الولي  " placeholder="نسب الولي"/>
 </div>
      </div>
      <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="تاريخ الإزدياد" type="date" name="تاريخ الإزدياد" id="تاريخ الإزدياد" placeholder="تاريخ الإزدياد"/>

      </div>
<div>
      <div class="formbold-mb-3">
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for="مكان الإزدياد"type="text" name="مكان الإزدياد" id="مكان الإزدياد" placeholder="مكان الإزدياد"/>
      </div>
      <div class="formbold-mb-3">
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      for="المستوى الدراسي"type="text" name="المستوى الدراسي" id="المستوى الدراسي" placeholder="المستوى الدراسي"/>
      </div>
</div>


<div class="formbold-input-wrapp formbold-mb-3">
        
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم الشخصي "type="text" name="الإسم الشخصي " id="الإسم الشخصي " placeholder="الإسم الشخصي "/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for=" الإسم العائلي"type="text" name=" الإسم العائلي" id=" الإسم العائلي" placeholder=" الإسم العائلي"/>
       </div>
      </div>
<div class="formbold-input-wrapp formbold-mb-3">
        
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="رقم البطاقة الوطنية"type="text" name="رقم البطاقة الوطنية" id="رقم البطاقة الوطنية" placeholder="رقم البطاقة الوطنية"/>
     <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="صالحة إلى غاية  " type="text" name="صالحة إلى غاية  "/>
       </div>
      </div>
<div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="للأسباب"type="text" name="للأسباب "id="للأسباب "placeholder="للأسباب "/>
      </div>
      
      <Link to="/AffichageExonération">
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


                   
                  


export default ExenorationFrais
