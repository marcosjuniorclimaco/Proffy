import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItems"
import Input from '../../components/Input';
import Select from '../../components/Select'

import "./styles.css";
import api from "../../services/api";



function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  
  
  async function searchTeachers(e:FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
      setTeachers(response.data);
  }


  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
          name="subject" 
          label="Matéria"
          value={subject}
          onChange={(e) => {setSubject(e.target.value)}}
         options = {[
          {value: 'Alemão', label: "Alemão"},
          {value: 'Artes', label: "Artes"},
          {value: 'Astrologia', label: "Astrologia"},
          {value: 'Biologia', label: "Biologia"},
          {value: 'Espanhol', label: "Espanhol"},
          {value: 'Filosofia', label: "Filosofia"},
          {value: 'Física', label: "Física"},
          {value: 'Francês', label: "Francês"},
          {value: 'Geografia', label: "Geografia"},
          {value: 'História', label: "História"},
          {value: 'Inglês', label: "Inglês"},
          {value: 'Italiano', label: "Italiano"},
          {value: 'Japonês', label: "Japonês"},
          {value: 'Matemática', label: "Matemática"},
          {value: 'Português', label: "Português"},
          {value: 'Química', label: "Química"},
          {value: 'Redação', label: "Redação"},
          {value: 'Sociologia', label: "Sociologia"},
         ]}
          />
         <Select 
          name="week_day" 
          label="Dia da semana"
          value={week_day}
          onChange={(e) => {setWeekDay(e.target.value)}}
         options = {[
          {value: '0', label: "Domingo"},
          {value: '1', label: "Segunda-feira"},
          {value: '2', label: "Terça-feira"},
          {value: '3', label: "Quarta-feira"},
          {value: '4', label: "Quinta-feira"},
          {value: '5', label: "Sexta-feira"},
          {value: '6', label: "Sabado"},
         ]}
          />
         <Input 
         type="time" 
         name="time" 
         label="hora" 
         value={time}
         onChange={(e) => {
           setTime(e.target.value)
        }}
         />

         <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        } )}
       
      </main>
    </div>
  );
}

export default TeacherList;
