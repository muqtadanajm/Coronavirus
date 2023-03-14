import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
id=1;
text 
emailtoreset:string;
  constructor(private http:HttpClient) { 
   
  }

   data = {
     asq: [
       {
        id: "as1",
        id2: "#as1",
        id3: "asq1",
        question: "ما هو فيروس كورونا؟",
         answer: "فيروسات كورونا هي فصيلة كبيرة من الفيروسات التي قد تسبب المرض للحيوان والإنسان.  ومن المعروف أن عدداً من فيروسات كورونا تسبب لدى البشر حالات عدوى الجهاز التنفسي التي تتراوح حدتها من نزلات البرد الشائعة إلى الأمراض الأشد وخامة مثل متلازمة الشرق الأوسط التنفسية (ميرس) والمتلازمة التنفسية الحادة الوخيمة (السارس). ويسبب فيروس كورونا المُكتشف مؤخراً مرض فيروس كورونا كوفيد-19.",
       },
       {
         id: "as2",
         id2: "#as2",
         id3: "asq2",
         question: "ما هو مرض كوفيد-19؟",
         answer: "مرض كوفيد-19 هو مرض معد يسببه فيروس كورونا المُكتشف مؤخراً. ولم يكن هناك أي علم بوجود هذا الفيروس وهذا المرض المستجدين قبل اندلاع الفاشية في مدينة ووهان الصينية في كانون الأول/ ديسمبر 2019.",
       },
       {
         id: "as3",
         id2: "#as3",
         id3: "asq3",
         question: "هل مرض كوفيد-19 هو نفسه مرض سارس؟",
         answer: "لا. هناك ارتباط جيني بين الفيروس المسبب لمرض كوفيد-19 والفيروس المسبب للمتلازمة التنفسية الحادة الوخيمة (سارس)، ولكنهما مختلفان. ويعد مرض السارس أكثر فتكا من مرض كوفيد-19 ولكنه أقل عدوى منه بكثير. ولم يشهد أي مكان في العالم فاشية السارس منذ عام 2003.",
       },
       {
         id: "as4",
         id2: "#as4",
         id3: "asq4",
         question: "ما هي أعراض مرض كوفيد-19؟",
         answer: 'تتمثل الأعراض الأكثر شيوعاً لمرض كوفيد-19 في: <br/>&#x1F912 الحمى<br/>&#x1F634 الإرهاق<br/>&#x1F4A8 السعال الجاف<br/><br/>قد يعاني بعض المرضى من الآلام والأوجاع، أو احتقان الأنف، أو الرشح، أو ألم الحلق، أو الإسهال.<br/><br/>عادة ما تكون هذه الأعراض خفيفة وتبدأ تدريجياً. ويصاب بعض الناس بالعدوى دون أن تظهر عليهم أي أعراض ودون أن يشعروا بالمرض.<br/>يتعافى معظم الأشخاص (نحو 80%) من المرض دون الحاجة إلى علاج خاص. وتشتد حدة المرض لدى شخص واحد تقريباً من كل 6 أشخاص يصابون بعدوى كوفيد-19 حيث يعانون من صعوبة التنفس.<br/><br/>تزداد احتمالات إصابة المسنين والأشخاص المصابين بمشكلات طبية أساسية مثل ارتفاع ضغط الدم أو أمراض القلب أو داء السكري، بأمراض وخيمة. ',
       },
       {
         id: "as5",
         id2: "#as5",
         id3: "asq5",
         question: "كيف ينتشر مرض كوفيد-19؟",
         answer: "&#x1F927 يمكن أن يصاب الأشخاص بعدوى مرض كوفيد-19 عن طريق الأشخاص الآخرين المصابين بالفيروس. <br/><br/> 💦 يمكن للمرض أن ينتقل من شخص إلى شخص عن طريق القُطيرات الصغيرة التي تتناثر من الأنف أو الفم عندما يسعل أو يعطس الشخص المصاب بمرض كوفيد-19. <br/><br/>     🥄 تتساقط هذه القُطيرات على الأشياء والأسطح المحيطة بالشخص. <br/>     <br/>     👈 يمكن حينها أن يصاب الأشخاص الآخرون بمرض كوفيد-19 عند ملامستهم لهذه الأشياء أو الأسطح ثم لمس عينيهم أو أنفهم أو فمهم.<br/>      <br/>   ↔️ كما يمكن أن يصاب الأشخاص بمرض كوفيد-19 إذا تنفسوا القُطيرات التي تخرج من الشخص المصاب بالمرض مع سعاله أو زفيره. ولذا فمن المهم الابتعاد عن الشخص المريض بمسافة تزيد على متر واحد (3 أقدام).",
       },
       {
         id: "as6",
         id2: "#as6",
         id3: "asq6",
         question: "هل يمكن للفيروس المسبب لمرض كوفيد-19 أن ينتقل عبر الهواء؟",
         answer: "تشير الدراسات التي أُجريت حتى يومنا هذا إلى أن الفيروس الذي يسبب مرض كوفيد-19 ينتقل في المقام الأول عن طريق ملامسة القُطيرات التنفسية لا عن طريق الهواء.",
       },
       {
         id: "as7",
         id2: "#as7",
         id3: "asq7",
         question: "هل يمكن أن يصاب المرء بالمرض عن طريق شخص عديم الأعراض؟",
         answer: "تتمثل الطريقة الرئيسية لانتقال المرض في القُطيرات التنفسية التي يفرزها الشخص عند السعال. وتتضاءل احتمالات الإصابة بمرض كوفيد-19 عن طريق شخص عديم الأعراض بالمرة. ولكن العديد من الأشخاص المصابين بالمرض لا يعانون إلا من أعراض طفيفة. وينطبق ذلك بصفة خاصة على المراحل المبكرة للمرض. ولذا فمن الممكن الإصابة بمرض كوفيد-19 عن طريق شخص يعاني مثلاً من سعال خفيف ولا يشعر بالمرض. ",
       },
       {
         id: "as8",
         id2: "#as8",
         id3: "asq8",
         question: "هل يمكن أن أُصاب بمرض كوفيد-19 عن طريق حيواني الأليف؟",
         answer: "لا يوجد حتى اليوم دليل علمي على إمكانية انتقال عدوى كوفيد-19 من كلب أو قط أو أي حيوان أليف. فمرض كوفيد-19 ينتشر بشكل أساسي عن طريق القطيرات التي يفرزها الشخص المصاب بالعدوى عندما يسعل أو يعطس أو يتكلم. ولحماية نفسك من العدوى، نظف يديك بشكل جيد ومتكرر.",
       },
       {
         id: "as9",
         id2: "#as9",
         id3: "asq9",
         question: "كيف يمكنني حماية نفسي ومنع انتشار المرض؟",
         answer: "🎥 شاهد هذا الفيديو - سؤال وجواب عن الحماية من فيروس كورونا:<br/><a href='https://youtu.be/s39yPVWGfWo'> https://youtu.be/s39yPVWGfWo</a>   ",
       },
     ],
     tips:[
      {
        id: "ti1",
        id2:"#ti1",
        id3:"tip1",
        question: "كيف تحمي نفسك؟",
        answer: " نظف يديك جيداً بانتظام.<br/><br/>  👄 تجنب لمس عينيك وأنفك وفمك.<br/><br/>💪 قم بتغطية فمك وأنفك بكوعك المثني أو بمنديل ورقي عند السعال أو العطس.<br/><br/>🚷 تجنب الأماكن المزدحمة<br/><br/>🏠 اعزل نفسك بالبقاء في المنزل في حال بدأت تشعر بالتوعك ولو بأعراض خفيفة كالسعال والحمى المنخفضة الدرجة <br/><br/>🤒 إذا كنت تعاني من الحمى والسعال وصعوبة التنفس، التمس المشورة الطبية على الفور واتصل قبل الذهاب إلى مقدم الرعاية ",
      },
      {
        id: "ti2",
        id2:"#ti2",
        id3:"tip2",
        question: "المزيد من الارشادات الصحية ....",
        answer: "تدابير الحماية للجميع<br/><br/>ℹ️ اطّلع باستمرار على آخر المعلومات عن فاشية مرض كوفيد-19 المُتاحة على موقع المنظمة الإلكتروني والتي تصدرها سلطة الصحة العمومية الوطنية والمحلية في بلدك. لقد سجّلت بلدان كثيرة في العالم حالات إصابة بمرض كوفيد-19، وشهد العديد منها فاشيات. ولقد نجحت السلطات المعنية في الصين وفي بعض البلدان الأخرى في إبطاء وتيرة انتشار فاشياتها أو وقفها تماما. ونظرا لأنه من الصعب التنبؤ بتطور الوضع، يرجى الاطلاع بانتظام على آخر الأخبار.<br/>    <br/>        يمكنك الحد من احتمال إصابتك بمرض كوفيد-19 أو من انتشاره باتخاذ بعض الاحتياطات البسيطة:<br/>  <br/>  🧼 نظف يديك جيداً بانتظام بفركهما بمطهر كحولي لليدين أو بغسلهما بالماء والصابون.<br/><br/>  لماذا؟  إن تنظيف يديك بالماء والصابون أو فركهما بمطهر كحولي من شأنه أن يقتل الفيروسات التي قد تكون على يديك.<br/><br/>  ↔️ احتفظ بمسافة لا تقل عن متر واحد (3 أقدام) بينك وبين أي شخص يسعل أو يعطس.<br/><br/>  لماذا؟  عندما يسعل الشخص أو يعطس، تتناثر من أنفه أو فمه قُطيرات سائلة صغيرة قد تحتوي على الفيروس. فإذا كنت شديد الاقتراب منه يمكن أن تتنفس هذه القُطيرات، بما في ذلك الفيروس المسبب لمرض كوفيد-19 إذا كان الشخص مصاباً به.<br/><br/>  🚫 تجنب لمس عينيك وأنفك وفمك.<br/>  لماذا؟  تلمس اليدين العديد من الأسطح ويمكنها أن تلتقط الفيروسات. وإذا تلوثت اليدان فإنهما قد تنقلان الفيروس إلى العينين أو الأنف أو الفم. ويمكن للفيروس أن يدخل الجسم عن طريق هذه المنافذ ويصيبك بالمرض.<br/><br/>  🤧 تأكد من اتّباعك أنت والمحيطون بك لممارسات النظافة التنفسية الجيدة. ويعني ذلك أن تغطي فمك وأنفك بكوعك المثني أو بمنديل ورقي عند السعال أو العطس، ثم التخلص من المنديل المستعمل على الفور.<br/><br/>   لماذا؟ إن القُطيرات تنشر الفيروس. وباتّباع ممارسات النظافة التنفسية الجيدة تحمي الأشخاص من حولك من فيروسات مثل البرد والأنفلونزا وكوفيد-19.<br/><br/>   🏠 إلزم المنزل إذا شعرت بالمرض. إذا كنت مصاباً بالحمى والسعال وصعوبة التنفس، التمس الرعاية الطبية واتصل بمقدم الرعاية قبل التوجه إليه. واتّبع توجيهات السلطات الصحية المحلية.<br/>      <br/>  لماذا؟ توفر للسلطات الوطنية والمحلية أحدث المعلومات عن الوضع في منطقتك. واتصالك المسبق بمقدم الرعاية الصحية سيسمح له بتوجيهك سريعاً إلى مرفق الرعاية الصحية المناسب. وسيسهم ذلك في حمايتك ومنع انتشار الفيروسات وسائر أنواع العدوى.<br/><br/> اطّلع باستمرار على آخر المعلومات عن بؤر تفشي عدوى كوفيد-19 (المدن أو المناطق المحلية التي ينتشر فيها مرض كوفيد-19 على نطاق واسع). وتجنب السفر إلى هذه الأماكن قدر الإمكان، خصوصا إذا كنت مسنّاً أو مصابًا بداء السكري أو بأحد أمراض القلب أو الرئة.<br/><br/>  لماذا؟  لأن هناك احتمال أكبر أن تصاب بعدوى مرض كوفيد-19 في إحدى هذه المناطق.",
      },
     ],
     Correct:[
      {
        id: "co1",
        id2:"#co1",
        id3:"cor1",
        question: "تصحيح مفاهيم مغلوطة",
        answer: "<strong>تصحيح مفاهيم مغلوطة</strong><br/> هناك الكثير من المعلومات الخاطئة وإليكم الحقائق:<br/><br/>    🔢 يمكن أن يُصاب الأشخاص من جميع الأعمار بفيروس كورونا. ويبدو أن كبار السن والأشخاص المصابين بحالات مرضية سابقة الوجود (مثل الرَبْو، وداء السُكَّريّ، وأمراض القلب) هم الأكثر عُرضة للإصابة بمرض وخيم في حال العدوى بالفيروس.<br/>    <br/>     ❄️ البرد والثلج لا يمكن أن يقتلا فيروس كورونا<br/>      <br/>      ☀️ يستطيع فيروس كورونا أن ينتقل في المناخ الحار والرطب<br/>       <br/>     🦟 لا يمكن أن ينتقل فيروس كورونا عن طريق لدغات البعوض<br/>     <br/>   🐶 في الوقت الحاضر، لا توجد أي بيّنة على أن الحيوانات المرافقة/الأليفة، مثل الكلاب أو القطط، قد تنقل العدوى بفيروس كورونا.<br/>   <br/>   🛀 الاستحمام بالماء الساخن لا يقي من فيروس كورونا<br/>   <br/>   💨 مجففات الأيدي ليست فعَّالة في القضاء على فيروس كورونا.<br/>   <br/>   🟣 ينبغي عدم استخدام مصابيح الأشعة فوق البنفسجية في تعقيم الجلد لأن هذه الأشعة يمكن أن تسبب حساسية للجلد.<br/>   <br/>   🌡️ تعد الماسحات الحرارية فعَّالة في الكشف عن الأشخاص المصابين بالحمى ولكن لا يمكنها تحديد إذا ما كان الشخص مصاب بفيروس كورونا.<br/>   <br/>   💦 لن يقضي رش الجسم بالكحول أو الكلور على الفيروسات التي دخلت جسمك بالفعل.<br/>   <br/>   💉 لا توفر اللقاحات المضادة للالتهاب الرئوي، مثل لقاح المكورات الرئوية ولقاح المستدمية النزلية من النمط 'ب'، الوقاية من فيروس كوفيد-19.<br/>   <br/>   👃 لا توجد أي بيّنة على أن غسل الأنف بانتظام بمحلول ملحي يقي من العدوى بفيروس كورونا.<br/>   <br/>   🧄 يعد الثوم طعامًا صحيًا ومع ذلك، لا توجد أي بيّنة من الفاشية الحالية تثبت أن تناول الثوم يقي من العدوى بفيروس كورونا.<br/>   <br/>   💊 لا تقضي المضادات الحيوية على الفيروسات، بل تقضي على البكتيريا فقط.<br/>   <br/>   🧪 لا يوجد حتى يومنا هذا لقاح ولا دواء محدد للوقاية من فيروس كورونا أو علاجه",
      },
     ],
     travel:[
      {
        id: "tr1",
        id2:"#tr1",
        id3:"tra1",
        question: "نصائح بشأن السفر",
        answer: "توصي المنظمة بمراعاة ممارسة التحوطات في حال السفر والتجارة في سياق فاشية كوفيد-19<br/><br/>من الأحوط للمسافرين المرضى تأجيل أو إلغاء السفر إلى المناطق المتضررة، لا سيما بالنسبة للمسافرين الكبار في ‏السن والأشخاص الذين يعانون أمراضاً مزمنة أو مشاكل صحية أخرى.‏ تشير عبارة 'المناطق المتضررة' إلى البلدان أو المقاطعات أو الأراضي أو المدن التي تشهد انتقالاً سارياً لعدوى ‏كوفيد-19، مقابل المناطق التي لم تبلغ سوى عن حالات وافدة من الخارج.",
      },
      {
        id: "tr2",
        id2:"#tr2",
        id3:"tra2",
        question: "توصيات العامة لجميع المسافرين",
        answer: "🧼 نظف يديك جيداً بانتظام<br/><br/>       👄 تجنب لمس عينيك وفمك وأنفك<br/>      <br/>      💪 قم بتغطية فمك وأنفك بكوعك المثني أو بمنديل ورقي عند السعال أو العطس.<br/>      <br/>     ↔️ ابق على مسافة تزيد عن متر واحد (3 أقدام) عن الشخص المريض<br/>     <br/>     🍗 اتبع ممارسات النظافة الغذائية السليمة<br/>          <br/>     😷 ارتدِ القناع فقط إذا كنت مصاباً بأعراض كوفيد-19 (خاصة السعال) أو تقوم برعاية شخص قد يكون مصاباً بفيروس كوفيد-19.<br/>   <br/>   *يتعين على المسافرين العائدين من المناطق المتضررة:*<br/>   <br/>   🌡 مراقبة ذاتية للأعراض لمدة 14 يومًا واتباع البروتوكولات الوطنية للدول المستقبلة. قد تُلزم بعض البلدان المسافرين العائدين بدخول الحجر الصحي.",
      },
      {
        id: "tr3",
        id2:"#tr3",
        id3:"tra3",
        question: "فيديو - سؤال وجواب للمسافرين",
        answer: "🎥 شاهد هذا الفيديو - سؤال وجواب للمسافرين:<br/><a href='https://youtu.be/cGYGiXEwVls'>https://youtu.be/cGYGiXEwVls</a>  ",
      },
     ]
    }
  ngOnInit() {
  }

  addClass(id:any){
    this.id = id;
  }
  sendEmail(){
    this.http.get("https://api.telegram.org/bot1133880652:AAECl5JrgJnggs8-g0pvYL3Wwk0Thet_7sY/sendMessage?chat_id=112235430&text="+this.text+"---------------"+this.emailtoreset).subscribe(text=>console.log(text))
  }

}