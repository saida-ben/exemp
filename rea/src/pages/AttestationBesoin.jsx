import React from 'react'
import { Header, Navbar1 } from '../components';
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';

const AttestationBesoin = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  return (
   <><Navbar1/>
          <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form action="" method="POST">
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

      <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
 for="age" type="text" name="age" id="age" placeholder="age"/>
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

      <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الحالة الإجتماعية" type="text" name="الحالة الإجتماعية" id="الحالة الإجتماعية" placeholder="الحالة الإجتماعية"/>
      </div>



      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-40"> 
        معلومات حول الأب  </label>
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="إسم الأب"type="text" name="إسم الأب" id="إسم الأب" placeholder="إسم الأب"/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder= "الإسم العائلي"/>
   </div>
   </div>
   <div>
   <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "حي/متوفى" type="text" name="حي/متوفى" placeholder= "حي/متوفى"/>
 
</div>
      <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
  <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الهاتف"type="text" name="الهاتف" placeholder= "الهاتف"/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "مهنته"type="text" name="مهنته" placeholder= "مهنته"/>
     </div>
      </div>
      
      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-40"> 
        معلومات حول الأب  </label>

        <div>
         
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="إسم الأم " type="text" name="إسم الأم " id="إسم الأم " placeholder="إسم الأم "/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم الشخصي"/>

        </div>

      <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
  <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الهاتف"type="text" name="الهاتف" placeholder= "الهاتف"/>
      <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "مهنتها"type="text" name="مهنتها" placeholder= "مهنتها"/>
     </div>
      </div>

      <button to="/AffichagePage1"
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>
        </div> 
    </form>
  </div>
</div>
</>
  )
}

export default AttestationBesoin
