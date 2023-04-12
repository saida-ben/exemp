import React from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'  
import { useStateContext } from '../contexts/ContextProvider';
import {Link} from 'react-router-dom';
import { Navbar1 } from '../components';

const DossierMedical = () => {

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  return (  
<>< Navbar1/>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />
    <form class="w-full ">
    <div class="flex flex-wrap -mx-3 mb-6">

    <Formulaire title="الاسم" id="الاسم" />
    <Formulaire title="النسب" id="النسب" />
    <Formulaire title="تاريخ القبول" id="تاريخ القبول" />
    <Formulaire title="تاريخ الميلاد" id="تاريخ الميلاد" />
    <Formulaire title="الوزن" id="الوزن" />
    <Formulaire title="فصيلة الدم" id="فصيلة الدم" />
    <Formulaire title="السكري" id="السكري" />
    <Formulaire title="الربو" id="الربو"/>
    <Formulaire title="حساسية" id="حساسية"/>
    <Formulaire title="الاعتلال العصبي" id="الاعتلال العصبي"/>
    <Formulaire title="الهموفيليا" id="الهموفيليا"/>
    <Formulaire title="ارتفاع ضغط الدم" id="ارتفاع ضغط الدم"/>
    <Formulaire title="اعتلال عضلي" id="اعتلال عضلي"/>
    <Formulaire title="مرض السل" id="مرض السل"/>
    <Formulaire title="أخرى(للتدقيق)" id="أخرى(للتدقيق)"/>
    <Formulaire title="ظهور الأسنان" id="ظهور الأسنان"/>
    <Formulaire title=" البطن" id=" البطن"/>
    <Formulaire title="نبض الضغط الشرياني" id="نبض الضغط الشرياني"/>
    <Formulaire title="تسمع القلب" id="تسمع القلب"/>
    <Formulaire title="البحث عن الأنفاس" id="البحث عن الأنفاس"/>
    <Formulaire title="الاهتزازات الصوتية" id="الاهتزازات الصوتية"/>
    <Formulaire title="أصوات التنفس" id="أصوات التنفس"/>
    <Formulaire title="بحوث السل (راديو الرئة)" id="بحوث السل (راديو الرئة)"/>
    <Formulaire title="حشرجة إذا كان موجودا" id="حشرجة إذا كان موجودا"/>
    <Formulaire title="قوة العضلات" id="قوة العضلات"/>
    <Formulaire title="ردود الفعل البطنية" id="ردود الفعل البطنية"/>
    <Formulaire title="الحساسية والمهارات الحركية" id="الحساسية والمهارات الحركية"/>
    <Formulaire title="حدة السمع" id="حدة السمع"/>
    <Formulaire title="حدة بصرية"id="حدة بصرية"/>
    <Formulaire title="الحساسية والمهارات الحركية" id="الحساسية والمهارات الحركية"/>
    <Formulaire title="تحقق من الحروق البولية" id="تحقق من الحروق البولية"/>
    <Formulaire title="فحص البول: سكر الزلال" id="فحص البول: سكر الزلال"/>
    <Formulaire title="انظر الجلد" id="فروة الرأس"/>
    <Formulaire title="فروة الرأس" id="الأغشية المخاطية"/>
    <Formulaire title="أبحاث الجرب" id="أبحاث الجرب"/>
    <Formulaire title="تحت الفكين" id="تحت الفكين"/>
    <Formulaire title="فوق الترقوة" id="فوق الترقوة"/>
    <Formulaire title="العكازات الإبطية" id="العكازات الإبطية"/>
    <Formulaire title="الفخذ" id="الفخذ"/>
    <Formulaire title=" V.D.R.L - T.P.H.A اختبار دم لمرض الزهري" id=" اختبار دم لمرض الزهري"/>
    <Formulaire title="سكر الدم" id="سكر الدم"/>
    <Formulaire title="التهاب الكبد" id="التهاب الكبد"/>
    <Formulaire title="N.F.Sتحليل الدم الشامل" id=" N.F.S تحليل الدم الشامل"/>
    <Formulaire title=" H.I.Vفيروس العوز المناعي البشري/ الأيدز" id=" H.I.Vفيروس العوز المناعي البشري/ الأيدز"/>
    <Formulaire title="بي سي جي" id="بي سي جي"/>
    <Formulaire title="كُزاز" id="كُزاز"/>
    <Formulaire title="لقاح ضد الحصبة/النكاف/الحميراء" id="لقاح ضد الحصبة/النكاف/الحميراء"/>
    <Formulaire title="لقاح ضد الحصبة/النكاف/الحميراء" id="لقاح ضد الحصبة/النكاف/الحميراء"/>
   
    <Link to="/AffichageDossierMedical">
    <button 
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>      </Link>

    

</div>


    </form>
    </div>
    </>
  )
}

export default DossierMedical
