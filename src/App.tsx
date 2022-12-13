import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import TestComponent from './components/testComponent';
import TestEinfacheDatentypen from './components/TestEinfacheDatentypen';
import { Reminder, IString } from './models/Reminder';
import ReminderService from './services/reminder';
import Badge from './components/Badge';
import BadgeFunctional from './components/BadgeFunctional';


// Array von Reminders
const reminders: Reminder[] = [
  {id:1,title: 'Reminder 1'}, 
  {id:2, title: 'React lernen'}
]; 

const zahl:number=5;
const name:string="meinName";

/* interface IProps {
  name: string,
  nr : number
}
let params:IProps = {name:"chris", nr:44};
*/
let testString:IString = {text: "chris",text2:"gg"};

function App() {

  // state hook 
  
  const [reminders, setReminders] = 
    useState<Reminder[]>([
    //{id:1,title: 'Reminder 1'}
  ]);  
  
  //effect hook
  useEffect(()=> {
    loadReminders();
  },[]);
  

  // holen des Reminder Service um über die API 
  // Daten zu holen
  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  // Bauen der Reminder Delete 

  const removeReminders = (id:number) => {
    console.log(id);
  }

  return (
    <div className="App">
      <Badge></Badge>
      <BadgeFunctional text={testString.text} text2={testString.text2}></BadgeFunctional>
      <TestEinfacheDatentypen name={name} nr={zahl}></TestEinfacheDatentypen>
      <TestComponent text={testString.text} text2={testString.text2}></TestComponent>
      
      <ReminderList  items={reminders} onRemoveReminder={removeReminders}  />
      
      <button className="btn btn-primary">
        Click me</button>
    </div>
  );
}

export default App;
