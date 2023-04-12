import React from 'react'
import { Header } from '../components';
import '../App.css';
import logo from '../components/img/logo daratfal.png';

const AffichageExonérationFrais = () => {
  return (
    <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     <img src={logo} width={100} height={100} />
          <h1 className=''>اذن بالتغيب</h1>
  
         <label className='left-0 formbold-form-label'>يأذن مدير المؤسسة :</label>
          <label className='formbold-form-label'>للمستفيد :</label>
          <label className='formbold-form-label'>رقم التسجيل :</label>
          <label className='formbold-form-label'>بتاريخ</label> :
          <label className='formbold-form-label'>بالتغيب لمدة</label>
          <label className='formbold-form-label'>أيام ,نظرا ل :</label>
    </div>
    </div>
    </form>
  )
}

export default AffichageExonérationFrais
