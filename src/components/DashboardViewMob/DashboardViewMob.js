import { useState } from 'react';
import TopPanel from '../TopPanel/TopPanel';
import Sections from '../sections/Sections';
import TransactionType from '../TransactionType/TransactionType';
import DatePicker from '../Calendar/calendar';
import Form from '../Form/Form';
import s from './DashboardViewMob.module.scss';
import TransactionsMobile from '../TransactionsMobile/TransactionsMobile'

function DashboardViewMob() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      {showForm ? (
        <Sections>
          <Form setShowForm={setShowForm} />
        </Sections>
      ) : (
        <>
          <div className={s.btnType}>
            <TransactionType isThemeTabs setShowForm={setShowForm} />
          </div>

          <Sections className="section-topPanel topPanel-dashboard">
            <TopPanel showReport />
          </Sections>

          <Sections className="section-dashboard">
            <label className={s.calendar}>
              <i className={s.calendarIcon}></i>
              <div className={s.calendarWrap}>
                <DatePicker className={s.calendarInput} />
              </div>
            </label>
          </Sections>
          <TransactionsMobile/>
        </>
      )}
    </>
  );
}

export default DashboardViewMob;
