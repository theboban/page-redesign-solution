import LegalLayout from "@/components/LegalLayout";

export default function Consent() {
  return (
    <LegalLayout
      title="Согласие на обработку персональных данных"
      subtitle="В соответствии со ст. 9 Федерального закона № 152-ФЗ «О персональных данных»"
    >
      <section>
        <p>Настоящим, действуя свободно, своей волей и в своём интересе, а также подтверждая свою дееспособность, я, как субъект персональных данных, посредством проставления отметки в чек-боксе «Я принимаю условия Политики конфиденциальности и даю согласие на обработку персональных данных» в форме обратной связи на сайте https://sv-stylist.ru, даю своё согласие Власовой Светлане (далее — «Оператор») на обработку моих персональных данных на следующих условиях:</p>
      </section>

      <section>
        <h2 className="font-cormorant text-3xl text-champagne mb-4">1. Перечень персональных данных</h2>
        <p>Согласие даётся на обработку следующих персональных данных:</p>
        <ul className="list-none space-y-2 pl-6">
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">фамилия, имя, отчество;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">номер контактного телефона;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">адрес электронной почты;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">содержание сообщения в форме обратной связи;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">сведения о выбранной услуге.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-cormorant text-3xl text-champagne mb-4">2. Цели обработки</h2>
        <p>Персональные данные обрабатываются в следующих целях:</p>
        <ul className="list-none space-y-2 pl-6">
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">установление обратной связи с Пользователем;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">оказание Оператором услуг персонального стилиста;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">заключение и исполнение гражданско-правовых договоров;</li>
          <li className="relative before:absolute before:-left-6 before:text-gold before:content-['—']">информирование Пользователя об услугах, акциях и предложениях Оператора.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-cormorant text-3xl text-champagne mb-4">3. Перечень действий с персональными данными</h2>
        <p>Согласие даётся на совершение следующих действий с персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
        <p>Обработка персональных данных осуществляется как с использованием средств автоматизации, так и без использования таких средств (смешанная обработка).</p>
      </section>

      <section>
        <h2 className="font-cormorant text-3xl text-champagne mb-4">4. Срок действия согласия</h2>
        <p>Настоящее согласие действует с момента его предоставления и в течение всего срока обработки персональных данных, либо до момента отзыва Пользователем настоящего согласия.</p>
        <p>Согласие может быть отозвано Пользователем в любой момент путём направления Оператору письменного уведомления по адресу электронной почты stylist@example.com с пометкой «Отзыв согласия на обработку персональных данных».</p>
      </section>

      <section>
        <h2 className="font-cormorant text-3xl text-champagne mb-4">5. Правовая основа</h2>
        <p>Правовой основой обработки персональных данных является Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных», а также настоящее согласие субъекта персональных данных.</p>
        <p>Я ознакомлен(а) с Политикой конфиденциальности, размещённой по адресу https://sv-stylist.ru/privacy, и подтверждаю, что, давая такое согласие, действую свободно, своей волей и в своём интересе.</p>
      </section>
    </LegalLayout>
  );
}
