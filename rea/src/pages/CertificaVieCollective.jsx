import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import { Button, Navbar1 } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import {Link} from 'react-router-dom';
import Items from '../pages/Items';

const CertificaVieCollective = () => {
  const { currentColor } = useStateContext();

  return (
    <>
    <Navbar1/>
    <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
      
      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-40"> 
        معلومات حول الطفل 
        </label> 
        <div class="formbold-mb-3">
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الرقم" type="text" name="الرقم" id="الرقم" placeholder="الرقم"/>
   </div>
        <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم الشخصي" placeholder="الإسم الشخصي"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم العائلي"type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي"/>
        </div>
      </div>
     
      <div class="formbold-input-wrapp formbold-mb-3">
      <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="من والدهم" type="text" name="من والدهم" id="الإسم الشخصي" placeholder="من والدهم"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="والدتهم"type="text" name="والدتهم" id="والدتهم" placeholder="والدتهم"/>
        </div>
      </div>
      <div class="formbold-input-wrapp formbold-mb-3">
      <div>
        <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="تاريخ الإزدياد" type="text" name="تاريخ الإزدياد" id="تاريخ الإزدياد" placeholder="تاريخ الإزدياد"/>
    <Items className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for=" مكان الإزدياد"type="text" name=" مكان الإزدياد" id=" مكان الإزدياد" placeholder=" مكان الإزدياد"/>
        </div>
      </div>


<Link to="/AffichageFréres">
<button 
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>      </Link> 
</div>
</div>
</>
)
}

export default CertificaVieCollective
