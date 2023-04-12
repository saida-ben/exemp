import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Navbar1 from '../components/Navbar1';

const CertficatDaptitudePhysique = () => {
  return (  
<> < Navbar1/>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />
    <form class="w-full ">
    <div class="flex flex-wrap -mx-3 mb-6">
    <Formulaire title=" prénom d’éléve" id=" prénom d’éléve" />
    <Formulaire title="nom d’éléve" id="nom l’éléve" />
    <Formulaire title="prénom doctor  " id="prénom doctor" />
    <Formulaire title="nom doctor" id="Nom doctor" />
    <Formulaire title="classe" id="classe" />
    <Formulaire title=" universitaire" id="universitaire" />
    <Formulaire title="La date" id="La date" />
    <Formulaire title="l’etablissement scolaire" id="l’etablissement scolaire"/>
    <Formulaire title="APTE INAPTE" id="APTE INAPTE"/>
    <Link to="/AffichageCertificatDAptitude">
        <button class="bg-blue-500 hover:bg-blue-700 mt-0 ml-20 text-white font-bold py-2 px-4 rounded-full">Click</button>
      </Link>
</div>
</form>
</div>
</>
  )
}

export default CertficatDaptitudePhysique
