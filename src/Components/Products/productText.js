import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ProductText() {
  return (
    <div className='ProductText'>
        <Row>
            <h2>الاكترونيات</h2>
            <p>هذه الاجهزه من انتاج شركاتنا العالميه وانه ...</p>
        </Row>    
        <Row>
            <div>
                <div className='cat-text d-inline'>الماركه :-</div>
                <div className='brand-text d-inline mt-1'>سامسونج</div>
            </div>
        </Row>
        <Row>
            <Col md='8' className='mt-1 d-flex'>
            <div className='color ms-2 border' style={{backgroundColor:'red'}}></div>
            <div className='color ms-2 border' style={{backgroundColor:'green'}}></div>
            <div className='color ms-2 border' style={{backgroundColor:'blue'}}></div>
            </Col>
        </Row>
        <Row>
            <div>المواصفات :- </div>
        </Row>
        <Row className='md-10'>
            <p className='product-description fs-14'>
     * استنادًا إلى مواصفات Galaxy S21 Ultra 5G. قد لا تنطبق على جميع الطُرز.

    *الصورة محاكاة. قد يختلف توفر اللون حسب البلد أو شركة الاتصالات. يحمل الهاتف Galaxy A52 التصنيف IP67، بناءً على ظروف اختبار الغمر في المياه العذبة حتى متر واحد لمدة تصل إلى 30 دقيقة. لا ينصح باستخدام الهاتف على الشاطئ أو في المسبح أو مع الماء والصابون. في حالة انسكاب السوائل المحتوية على السكر على الهاتف، يُرجى شطف الهاتف بالماء النظيف والراكد أثناء النقر على المفاتيح. يكون الهاتف في حالة آمنة عند استخدام ضغط الماء المنخفض فقط. قد يتسبب ارتفاع ضغط الماء مثل مياه الصنبور الجارية أو الدش في تلف الجهاز.

    * تم التقدير بناءً على البيانات الموجودة في ملف تعريف الاستخدام. كما تم التقييم من جانب Strategy Analytics في الفترة من 8 إلى 20 ديسمبر 2021 في الولايات المتحدة والمملكة المتحدة مع إصدارات مسبقة من SM-S901 وSM-S906 وSM-S908 بالإعداد الافتراضي باستخدام شبكات 5G Sub6 من الجيل الخامس (لم يتم اختباره باستخدام شبكة 5G mmWave). يختلف عمر البطارية وفقًا لبيئة الشبكة والميزات والتطبيقات المستخدمة ومعدل إجراء

    * قد تختلف الميزة الرئيسية عن المواصفات الرئيسية

    * البطارية: تختلف الفترة الفعلية لعمر البطارية وفقًا لبيئة الشبكة والسمات والتطبيقات المستخدمة وتكرار المكالمات والرسائل وعدد مرات الشحن والعديد من العوامل الأخرى.

    * الذاكرة المتاحة للمستخدم: تقل ذاكرة المستخدم عن الذاكرة الإجمالية نتيجة تخزين نظام التشغيل والبرامج المستخدمة لتشغيل سمات الجهاز. وسوف تتغير ذاكرة المستخدم الفعلية بالاستناد إلى نوع مشغِّل الجهاز، وقد تختلف بعد إجراء ترقيات للبرامج.

    * الشبكة: ربما يتغير عرض النطاق الترددي الذي يدعمه الجهاز وفقًا للمنطقة أو مقدم الخدمة.

            </p>
        </Row>
        <Row className='mt-4 ' >
            <Col md='12 '>
                <button style={{backgroundColor:'#333' , color:'white' , marginLeft:'10px'}}> السعر :- 3500 </button>
                 <button style={{backgroundColor:'#333' , color:'white'}}>اضف للعربة</button>
            </Col>
        </Row>
    </div>
  )
}